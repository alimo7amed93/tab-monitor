from flask import Flask, request, jsonify
from flask_cors import CORS
import csv
from datetime import datetime

app = Flask(__name__)
CORS(app)

# File to store tab data
csv_file = "tab_data.csv"

# Ensure CSV has headers
with open(csv_file, mode='w', newline='') as file:
    writer = csv.writer(file)
    writer.writerow(["URL", "Timestamp", "TimeSpent"])

@app.route('/tab-data', methods=['POST'])
def receive_tab_data():
    data = request.json
    url = data.get('url')
    timestamp = data.get('timestamp')
    time_spent = data.get('timeSpent')

    if not url or not timestamp or not time_spent:
        return jsonify({"error": "Invalid data"}), 400

    # Write to CSV
    with open(csv_file, mode='a', newline='') as file:
        writer = csv.writer(file)
        writer.writerow([url, timestamp, time_spent])

    return jsonify({"message": "Data received successfully"}), 200

if __name__ == "__main__":
    app.run(debug=True)
