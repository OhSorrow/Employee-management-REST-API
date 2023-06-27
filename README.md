# Employee Management API

This is a Node.js API for managing employees. It provides CRUD (Create, Read, Update, Delete) operations for employees.

## Installation

1. Clone the repository:

   ```
   git clone https://github.com/your-username/employee-management-api.git
   ```

2. Install the dependencies:

   ```
   cd employee-management-api
   npm install
   ```

3. Create a `.env` file in the root of your project directory, and add the following lines to it:

   ```
   MONGODB_URI=mongodb+srv://<username>:<password>@employees.h0qdzzw.mongodb.net/?retryWrites=true&w=majority
   ```

   Replace `<username>` and `<password>` with your actual MongoDB username and password.

4. Start the API server:

   ```
   npm start
   ```

   The API server will start running on `http://localhost:5000`.

## API Endpoints

### Get all employees

```
GET /employees
```

Returns a list of all employees.

### Get a single employee

```
GET /employees/:id
```

Returns a single employee with the specified ID.

### Create a new employee

```
POST /employees
```

Creates a new employee with the specified data.

### Update an existing employee

```
PATCH /employees/:id
```

Updates an existing employee with the specified ID.

### Delete an employee

```
DELETE /employees/:id
```

Deletes an employee with the specified ID.

## Technology Stack

- Node.js
- Express.js
- MongoDB

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
