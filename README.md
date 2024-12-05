# Spotify Clone

A web application replicating the core interface of Spotify, built with **ReactJS** and **Material UI**. The project integrates the **Spotify Web API** to fetch and display user data dynamically.

---
## Acknowledgements

- **Spotify**: For providing the Web API.
- **ReactJS**: For the robust and modular frontend framework.
- **Material UI**: For the beautiful component library.

---

## Features

1. **User Interface**
   - A clean and responsive UI inspired by Spotify's design.
   - Developed with ReactJS and styled using Material UI for a modern aesthetic.

2. **Spotify API Integration**
   - Fetches and displays:
     - **User Details**: Username and profile logo.
     - **Playlists**: Names, logos, and descriptions.
     - **Song Details**: Name, description, and photo for each song.

3. **Current Status**
   - **Working Features**:
     - UI and API integration for fetching and displaying user data, playlists, and song details.
   - **Under Development**:
     - Song playback functionality and additional interactivity.

---

## Getting Started

### Prerequisites
- **Node.js** (v16 or higher recommended)
- **Spotify Developer Account** to obtain API credentials

### Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/spotify-clone.git
   cd spotify-clone
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file in the project root and add your Spotify API credentials:
   ```env
   REACT_APP_SPOTIFY_CLIENT_ID=your_client_id
   REACT_APP_SPOTIFY_CLIENT_SECRET=your_client_secret
   REACT_APP_REDIRECT_URI=http://localhost:3000/
   ```

4. Start the development server:
   ```bash
   npm start
   ```

5. Open the app in your browser:
   [http://localhost:3000/](http://localhost:3000/)

---

## Technologies Used

- **ReactJS**: Frontend library for building user interfaces.
- **Material UI**: UI components for styling and layout.
- **Spotify Web API**: Fetching user data, playlists, and song details.

---

## Future Enhancements

- Add song playback functionality.
- Improve interactivity with playlist and song controls.
- Optimize UI for performance and mobile responsiveness.

---

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.





