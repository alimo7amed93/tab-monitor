# Tab Monitor: Chrome Extension with Flask Backend

Tab Monitor is a project that combines a Chrome extension and a Flask backend to track browser activity. The extension monitors active tabs and records data such as the URL, timestamp, and time spent on each tab. This data is sent to a Flask server and saved in a CSV file for further analysis.

## Features
- Tracks active tabs and URL changes in Chrome.
- Records time spent on each URL.
- Sends tab data (URL, timestamp, and time spent) to a Flask backend.
- Stores tab activity data in a CSV file.

## Prerequisites
- [Python](https://www.python.org/) (3.6 or higher)
- [Google Chrome](https://www.google.com/chrome/)
- Basic understanding of JavaScript and Python

## Getting Started
Follow these steps to set up the project on your local machine.

### 1. Clone the Repository
```bash
git clone https://github.com/alimo7amed93/tab-monitor.git
cd tab-monitor
```

### 2. Set Up the Flask Backend

#### Install Required Python Libraries
Make sure you have `pip` installed. Then run:
```bash
pip install flask flask-cors
```

#### Flask Backend Code
The Flask app receives data from the Chrome extension and stores it in a CSV file. The backend code is in `app.py`.

Run the Flask app:
```bash
python app.py
```

By default, the server runs at `http://127.0.0.1:5000/`.

### 3. Set Up the Chrome Extension

#### Chrome Extension Files
The extension files are located in the `extension/` directory. This includes:
- `manifest.json`
- `background.js`

#### Load the Extension
1. Open Chrome and go to `chrome://extensions/`.
2. Enable "Developer mode" in the top right corner.
3. Click "Load unpacked" and select the `extension/` folder.

### 4. Test the Project
1. Start the Flask backend (`app.py`).
2. Load the Chrome extension (`extension/` folder).
3. Open and switch between tabs, URLs in Chrome to generate data.
4. Check the `tab_data.csv` file to see the recorded tab activity.

## Project Structure
```
.
├── extension
│   ├── manifest.json
│   ├── background.js
├── app.py
├── tab_data.csv
├── README.md
```

### File Descriptions
- `extension/manifest.json`: Defines Chrome extension metadata and permissions.
- `extension/background.js`: Contains JavaScript code to monitor tab activity.
- `app.py`: Flask server that receives and logs tab data.
- `tab_data.csv`: CSV file where tab data is stored.

## Example Output
The `tab_data.csv` file will look like this:
```csv
URL,Timestamp,TimeSpent
https://example.com,2024-12-10T10:00:00Z,15.5
https://another-site.com,2024-12-10T10:00:15Z,10.2
```

## Future Enhancements
- Add a dashboard to visualize tab activity data.
- Filter specific URLs (e.g., localhost).
- Support for multiple browsers.

## Contributing
Contributions are welcome! Feel free to fork the repository and submit a pull request.

## Acknowledgments
- [Google Chrome Extensions Documentation](https://developer.chrome.com/docs/extensions/)
- [Flask Documentation](https://flask.palletsprojects.com/)

---

Happy Coding!

