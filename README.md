# MOVIE API

## Overview

This project is a web application built using Django for the backend API and Angular for the frontend interface. It allows users to perform CRUD (Create, Read, Update, Delete) operations on a database through a user-friendly interface.

The backend API is developed using Django, which provides endpoints to interact with the database. These endpoints handle requests from the frontend, perform necessary database operations, and return appropriate responses.

The frontend interface is developed using Angular, a powerful JavaScript framework for building single-page applications. It interacts with the Django backend through HTTP requests to fetch and manipulate data from the database.

The entire application is deployed on the Vercel platform, which provides hosting for both the Django backend and Angular frontend. This allows users to access the application from any device with an internet connection.

## Features

- **CRUD Operations**: Users can create, read, update, and delete records in the database.
- **Responsive Design**: The frontend interface is responsive and adapts to different screen sizes.
- **Real-time Updates**: Changes made by one user are immediately reflected to other users in real-time.
- **Search and Filtering**: Users can search for specific records and apply filters to narrow down results.
- **Customizable Settings**: Users can customize various settings and preferences according to their needs.

## Technologies Used

- **Django**: Python-based web framework for building the backend API.
- **Django REST Framework (DRF)**: Toolkit for building Web APIs in Django.
- **Angular**: TypeScript-based frontend framework for building single-page applications.
- **HTML/CSS/JavaScript**: Frontend development languages for building the user interface.
- **Vercel**: Cloud platform for deploying serverless functions and static websites.
- **Railway**:Cloud platform for providing database.

## Installation

To run the project locally, follow these steps:

1. Clone the repository: `git clone <repository-url>`
2. Navigate to the backend directory: `cd backend`
3. Install backend dependencies: `pip install -r requirements.txt`
4. Run the Django development server: `python manage.py runserver`
5. Navigate to the frontend directory: `cd frontend`
6. Install frontend dependencies: `npm install`
7. Run the Angular development server: `ng serve`

## Deployment

The project is deployed on the Vercel platform. To deploy the application:

1. Create a Vercel account and install the Vercel CLI.
2. Navigate to the project directory.
3. Run the Vercel deployment command: `vercel --prod`
4. Follow the prompts to deploy the backend and frontend applications.

## Usage

Once the application is deployed, users can access it through the provided URL. They can then perform CRUD operations, search for records, and customize settings as needed.

## Contributing

Contributions are welcome! If you would like to contribute to the project, please follow these steps:

1. Fork the repository.
2. Create a new branch for your feature: `git checkout -b feature-name`
3. Make changes and commit them: `git commit -am 'Add new feature'`
4. Push your changes to the branch: `git push origin feature-name`
5. Submit a pull request with a detailed description of your changes.

## License

This project is licensed under the [MIT License](LICENSE).
