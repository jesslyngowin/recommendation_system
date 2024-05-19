from flask import Flask, request, jsonify, render_template, session
from flask_session import Session
import pandas as pd
import numpy as np
from collections import Counter
from sklearn.metrics.pairwise import cosine_similarity

app = Flask(__name__)
app.secret_key = 'toni'  # Replace with a strong secret key
app.config["SESSION_TYPE"] = "filesystem" 

# ... (dictionaries dict_riasec, dict_tipe_kecerdasan, dict_gaya_belajar remain the same)
dict_riasec = {
    'R': 'Realistic',
    'I': 'Investigative',
    'A': 'Artistic',
    'S': 'Social',
    'E': 'Enterprising',
    'C': 'Conventional',
}

dict_tipe_kecerdasan = {
    1: 'Logis/Matematis',
    2: 'Intrapersonal',
    3: 'Interpersonal',
    4: 'Visual/Spasial',
    5: 'Naturalis',
    6: 'Verbal/Linguistik',
    7: 'Kinestetik',
    8: 'Musikal'
}

dict_gaya_belajar = {
    '1': 'Visual',
    '2': 'Auditori',
    '3': 'Kinestetik'
}

# Encoding Dictionaries (Combined)
encode_dict = {
    'kecendrungan_otak': { 
        'dom_kanan': [1, 0, 0, 0],
        'dom_kiri': [0, 1, 0, 0],
        'seimbang_kanan': [0, 0, 1, 0],
        'seimbang_kiri': [0, 0, 0, 1]
    },
    'riasec': {
        'Artistic': [1, 0, 0, 0, 0, 0],
        'Conventional': [0, 1, 0, 0, 0, 0],
        'Enterprising': [0, 0, 1, 0, 0, 0],
        'Investigative': [0, 0, 0, 1, 0, 0],
        'Realistic': [0, 0, 0, 0, 1, 0],
        'Social': [0, 0, 0, 0, 0, 1]
    },
    'tipe_kecerdasan': {
        'Interpersonal': [1, 0, 0, 0, 0, 0, 0, 0],
        'Intrapersonal': [0, 1, 0, 0, 0, 0, 0, 0],
        'Kinestetik': [0, 0, 1, 0, 0, 0, 0, 0],
        'Logis/Matematis': [0, 0, 0, 1, 0, 0, 0, 0],
        'Musikal': [0, 0, 0, 0, 1, 0, 0, 0],
        'Naturalis': [0, 0, 0, 0, 0, 1, 0, 0],
        'Verbal/Linguistik': [0, 0, 0, 0, 0, 0, 1, 0],
        'Visual/Spasial': [0, 0, 0, 0, 0, 0, 0, 1]
    },
    'gaya_belajar': {
        'Auditori': [1, 0, 0],
        'Kinestetik': [0, 1, 0],
        'Visual': [0, 0, 1]
    }
}

# Major Matrix (NumPy array)
major_matrix = np.array([
    [0.14285714, 0.21428571, 0.35714286, 0.28571429, 0.07142857, 0.5,
     0.14285714, 0.14285714, 0.0, 0.14285714, 0.28571429, 0.0,
     0.07142857, 0.21428571, 0.07142857, 0.0, 0.07142857, 0.28571429,
     0.14285714, 0.07142857, 0.78571429],
    [0.4, 0.3, 0.2, 0.1, 0.0, 0.0, 0.1, 0.8, 0.0, 0.1, 0.0, 0.2,
     0.1, 0.3, 0.0, 0.2, 0.1, 0.1, 0.1, 0.0, 0.9],
    [0.5, 0.5, 0.0, 0.0, 0.0, 0.0, 0.0, 0.5, 0.5, 0.0, 0.0, 0.0,
     0.0, 0.5, 0.5, 0.0, 0.0, 0.0, 0.0, 0.0, 1.0],
    [0.0, 0.5, 0.375, 0.125, 0.125, 0.125, 0.0, 0.25, 0.0, 0.5,
     0.5, 0.0, 0.0, 0.25, 0.0, 0.0, 0.25, 0.0, 0.375, 0.0, 0.625],
    [0.31578947, 0.31578947, 0.21052632, 0.15789474, 0.15789474, 0.15789474,
     0.15789474, 0.10526316, 0.10526316, 0.31578947, 0.10526316, 0.05263158,
     0.0, 0.52631579, 0.0, 0.10526316, 0.05263158, 0.15789474,
     0.15789474, 0.10526316, 0.73684211],
    [0.57142857, 0.14285714, 0.14285714, 0.14285714, 0.0, 0.14285714,
     0.14285714, 0.57142857, 0.0, 0.14285714, 0.0, 0.42857143,
     0.0, 0.28571429, 0.14285714, 0.0, 0.0, 0.14285714, 0.14285714,
     0.0, 0.85714286],
    [0.4, 0.2, 0.2, 0.2, 0.2, 0.2, 0.6, 0.0, 0.0, 0.0, 0.4, 0.2,
     0.0, 0.4, 0.0, 0.0, 0.0, 0.0, 0.2, 0.2, 0.6],
    [0.2, 0.0, 0.4, 0.4, 0.0, 0.4, 0.2, 0.4, 0.0, 0.0, 0.0, 0.0,
     0.0, 1.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 1.0]
])

# Major Names (List)
majors = [
    'Aktuaria', 'Biokimia', 'Biologi', 'Fisika', 'Ilmu Komputer',
    'Kimia', 'Matematika', 'Statistika'
]

# Encoding Function
def encode_input(results):
    encoded_data = []
    for test_type, result in results.items():
        if test_type in encode_dict:
            encoded_data.extend(encode_dict[test_type][result])
    return np.array(encoded_data).reshape(1, -1)

# Recommendation Function
def recommend_majors(matrix, new_data, top_n=3):
    similarities = cosine_similarity(matrix, new_data).flatten()
    top_indices = similarities.argsort()[-top_n:][::-1]
    return [(majors[i], similarities[i]) for i in top_indices]

# Flask Routes
@app.route('/', methods=['GET'])
def index():
    return render_template('index.html')

@app.route('/submit', methods=['POST'])
def submit():
    data = request.json
    processed_data = {}  # Store processed results

    for test_type, responses in data.items():
        try:
            if test_type == 'riasec':
                # ... (Process RIASEC responses)
                RIASEC_df = pd.DataFrame({
                    'R': responses[:10],
                    'I': responses[10:20],
                    'A': responses[20:30],
                    'S': responses[30:40],
                    'E': responses[40:50],
                    'C': responses[50:60]
                }).astype(int)
                processed_data[test_type] = dict_riasec[RIASEC_df.sum().idxmax()]
            elif test_type == 'kecendrungan_otak':  # Penambahan untuk kecenderungan otak
                # Di sini kita asumsikan bahwa responses adalah sebuah list dengan satu elemen (hasil kecenderungan otak)
                processed_data[test_type] = responses[0]
            elif test_type == 'tipe_kecerdasan':
                # ... (Process Tipe Kecerdasan responses)
                TipeKecerdasan_df = pd.DataFrame({
                    'Logis/Matematis': responses[:10],
                    'Intrapersonal': responses[10:20],
                    'Interpersonal': responses[20:30],
                    'Visual/Spasial': responses[30:40],
                    'Naturalis': responses[40:50],
                    'Verbal/Linguistik': responses[50:60],
                    'Kinestetik': responses[60:70],
                    'Musikal': responses[70:80]
                }).astype(int)
                processed_data[test_type] = TipeKecerdasan_df.sum().idxmax()
            elif test_type == 'gaya_belajar':
                # ... (Process Gaya Belajar responses)
                processed_data[test_type] = dict_gaya_belajar[Counter(responses).most_common(1)[0][0]]
            else:
                processed_data[test_type] = responses[0]  # Other test types
        except (KeyError, IndexError) as e:
            return jsonify({"error": f"Invalid data for {test_type}: {e}"}), 400

    encoded_input = encode_input(processed_data)
    recommendations = recommend_majors(major_matrix, encoded_input)
    session['recommendations'] = recommendations

    return jsonify(recommendations)

@app.route('/result')
def result():
    recommendations = session.get('recommendations', [])
    return render_template('result.html', recommendations=recommendations)

if __name__ == '__main__':
    app.run(debug=True)
