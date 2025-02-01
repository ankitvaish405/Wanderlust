# Wanderlust

![image](https://github.com/user-attachments/assets/d446a24c-10c4-4214-8a9b-93f39dc3bee0)

Wanderlust is an innovative web application designed to connect travelers with unique accommodations, destinations, and experiences around the world. Whether you're an adventure seeker looking for off-the-grid stays, a business traveler seeking comfortable short-term rentals, or a tourist searching for luxury hotels, Wanderlust provides an easy-to-use platform to find, book, and manage accommodations effortlessly.

This project aims to simplify the travel planning process by offering a seamless, feature-rich, and community-driven platform
---

## Table of Contents
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Contributing](#contributing)
- [License](#license)
- [Acknowledgments](#acknowledgments)

---

## Features
✅ **User Authentication**: Secure login and registration for users.  
✅ **Property Listings**: Users can list their properties with images, descriptions, and pricing.  
✅ **Booking System**: Users can book properties and manage reservations.  
✅ **Search Functionality**: Advanced search and filter options for finding the perfect stay.  
✅ **Responsive Design**: Optimized for seamless user experience across all devices.

---

## Technologies Used

### Frontend:
- HTML5
- CSS3
- JavaScript
- EJS (Embedded JavaScript Templates)

### Backend:
- Node.js
- Express.js

### Database:
- MongoDB

### Authentication:
- Passport.js

### File Uploads:
- Multer (for handling multipart/form-data)

### Cloud Services:
- Cloudinary (for image storage)

---

## Installation

To run this project locally, follow these steps:

1. **Clone the repository:**
   ```bash
   git clone https://github.com/ankitvaish405/Wanderlust.git
   cd Wanderlust
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Set up environment variables:**
   Create a `.env` file in the root directory and add the following variables:
   ```env
   CLOUDINARY_CLOUD_NAME=your_cloud_name
   CLOUDINARY_API_KEY=your_api_key
   CLOUDINARY_API_SECRET=your_api_secret
   MONGODB_URI=your_mongodb_uri
   SESSION_SECRET=your_session_secret
   ```
   Replace `your_cloud_name`, `your_api_key`, `your_api_secret`, `your_mongodb_uri`, and `your_session_secret` with your actual configuration details.

4. **Start the application:**
   ```bash
   node app.js
   ```
   The application will be running at [http://localhost:3000](http://localhost:3000) (or your specified port).

---

## Usage

- **Sign Up:** Create an account to access all features.
- **Create a Listing:** List a property with all necessary details.
- **Search for Properties:** Use the search bar and filters to find accommodations.
- **Book a Property:** Reserve a stay and complete the booking process.
- **Leave a Review:** Share your experience by leaving reviews on properties.

---

## Project Structure

```
Wanderlust/
├── controllers/        # Controllers for handling requests
├── models/             # Mongoose models
├── public/             # Static assets (CSS, JS, images)
├── routes/             # Application routes
├── views/              # EJS templates
├── app.js              # Main application file
├── cloudConfig.js      # Cloudinary configuration
├── middleware.js       # Custom middleware
├── package.json        # Project metadata and dependencies
└── .env                # Environment variables
```

---

## Contributing

Contributions are welcome! Follow these steps to contribute:

1. **Fork the repository.**
2. **Create a new branch:**
   ```bash
   git checkout -b feature/YourFeatureName
   ```
3. **Make your changes.**
4. **Commit your changes:**
   ```bash
   git commit -m 'Add YourFeatureName'
   ```
5. **Push to the branch:**
   ```bash
   git push origin feature/YourFeatureName
   ```
6. **Open a Pull Request.**

![image](https://github.com/user-attachments/assets/ad4e1fb2-ed0b-4fd8-b54e-73cd254ef598)

Please ensure your code follows the project's coding standards and includes appropriate tests.

---

## License
This project is licensed under the **MIT License**.

---

## Acknowledgments
Special thanks to all contributors, mentors, and resources that helped in the development of this project.

