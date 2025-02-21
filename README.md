### Deployed App Link
 ```sh
     https://brainbuzz-omega.vercel.app/
   ```


### Backend Setup
1. Clone the repository:
   ```sh
     git clone https://github.com/abhitsahu/BRAINBUZZ.git
     cd BRAINBUZZ
   ```
   
2. Install backend dependencies:
   ```sh
    cd backend
    npm install
   ```
   
3. Set up environment variables:
    Create a .env file in the backend directory with the following content:
   ```sh
    MONGO_URI=your_mongodb_connection_string
    JWT_SECRET=your_jwt_secret
   ```

4. Start the backend server:
   ```sh
    npm run dev
   ```

###  Frontend Setup

1. Install frontend dependencies:
``` sh
    cd ../frontend
    npm install
```

2. Start the frontend server:
``` sh
    npm run dev
```
The application should now be running, with the frontend accessible at http://localhost:5173 and the backend at http://localhost:3000.

### API Endpoints
#### Auth
POST /api/auth/register: Sign Up User.
POST /api/auth/login: Authenticate admin/user and return a JWT token.

#### Admin
GET /api/admin/quizzes: Get all quizzes.

POST /api/admin/quizzes: Add a new quiz.

PUT /api/admin/quizzes/:id: Update a quiz.

DELETE /api/admin/quizzes/:id: Delete a quiz.

GET /api/admin/quizzes/:id/questions: Get all questions for a quiz.

POST /api/admin/quizzes/:id/questions: Add a new question to a quiz.

PUT /api/admin/questions/:id: Update a question.

DELETE /api/admin/questions/:id: Delete a question.

GET /api/admin/scores: Get scores for all users or a particular quiz.

#### User
GET /api/quizzes: Get all available quizzes.

POST /api/quizzes/:id/attempt: Attempt a quiz.

GET /api/users/:id/attempts: Get all attempts for a user
