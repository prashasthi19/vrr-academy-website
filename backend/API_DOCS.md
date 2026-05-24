# API Documentation

## Base URL
```
http://localhost:5000/api
```

## Endpoints

### 1. Submit Enquiry
**POST** `/enquiry`

Submit a new student enquiry.

**Request Body:**
```json
{
  "name": "John Doe",
  "phone": "9876543210",
  "class": "12",
  "course": "JEE",
  "message": "I want to join JEE coaching"
}
```

**Response (Success - 201):**
```json
{
  "success": true,
  "message": "Enquiry submitted successfully",
  "data": {
    "_id": "507f1f77bcf86cd799439011",
    "name": "John Doe",
    "phone": "9876543210",
    "class": "12",
    "course": "JEE",
    "message": "I want to join JEE coaching",
    "status": "new",
    "createdAt": "2024-01-15T10:30:00.000Z",
    "updatedAt": "2024-01-15T10:30:00.000Z"
  },
  "timestamp": "2024-01-15T10:30:00.000Z"
}
```

**Validation Rules:**
- `name`: Required, min 2 characters
- `phone`: Required, exactly 10 digits
- `class`: Required, must be one of: 9, 10, 11, 12
- `course`: Required, must be one of: Foundation, JEE, NEET
- `message`: Optional, max 500 characters

---

### 2. Get All Enquiries
**GET** `/enquiry?status=new&limit=10&skip=0`

Retrieve all enquiries with optional filters.

**Query Parameters:**
- `status` (optional): Filter by status (new, contacted, enrolled, rejected)
- `limit` (optional): Number of records per page (default: 10)
- `skip` (optional): Number of records to skip for pagination (default: 0)

**Response (Success - 200):**
```json
{
  "success": true,
  "message": "Enquiries fetched successfully",
  "data": {
    "enquiries": [...],
    "total": 25,
    "limit": 10,
    "skip": 0
  },
  "timestamp": "2024-01-15T10:30:00.000Z"
}
```

---

### 3. Get Enquiry by ID
**GET** `/enquiry/:id`

Retrieve a specific enquiry by ID.

**Response (Success - 200):**
```json
{
  "success": true,
  "message": "Enquiry fetched successfully",
  "data": {
    "_id": "507f1f77bcf86cd799439011",
    "name": "John Doe",
    "phone": "9876543210",
    "class": "12",
    "course": "JEE",
    "status": "new",
    "createdAt": "2024-01-15T10:30:00.000Z",
    "updatedAt": "2024-01-15T10:30:00.000Z"
  },
  "timestamp": "2024-01-15T10:30:00.000Z"
}
```

---

### 4. Update Enquiry
**PUT** `/enquiry/:id`

Update enquiry status.

**Request Body:**
```json
{
  "status": "contacted"
}
```

**Response (Success - 200):**
```json
{
  "success": true,
  "message": "Enquiry updated successfully",
  "data": {
    "_id": "507f1f77bcf86cd799439011",
    "status": "contacted",
    "updatedAt": "2024-01-15T11:00:00.000Z"
  },
  "timestamp": "2024-01-15T11:00:00.000Z"
}
```

---

### 5. Delete Enquiry
**DELETE** `/enquiry/:id`

Delete an enquiry.

**Response (Success - 200):**
```json
{
  "success": true,
  "message": "Enquiry deleted successfully",
  "data": {
    "_id": "507f1f77bcf86cd799439011"
  },
  "timestamp": "2024-01-15T11:05:00.000Z"
}
```

---

### 6. Health Check
**GET** `/health`

Check if the server is running.

**Response (Success - 200):**
```json
{
  "status": "Server is running",
  "timestamp": "2024-01-15T10:30:00.000Z"
}
```

---

## Error Responses

### 400 - Bad Request (Validation Error)
```json
{
  "success": false,
  "message": "Validation failed",
  "errors": [
    {
      "type": "field",
      "value": "123",
      "msg": "Phone must be a valid 10-digit number",
      "path": "phone",
      "location": "body"
    }
  ],
  "timestamp": "2024-01-15T10:30:00.000Z"
}
```

### 404 - Not Found
```json
{
  "success": false,
  "message": "Enquiry not found",
  "error": null,
  "timestamp": "2024-01-15T10:30:00.000Z"
}
```

### 500 - Internal Server Error
```json
{
  "success": false,
  "message": "Error submitting enquiry",
  "error": "Database connection failed",
  "timestamp": "2024-01-15T10:30:00.000Z"
}
```

---

## Status Codes

| Code | Meaning |
|------|---------|
| 200 | OK - Request successful |
| 201 | Created - Resource created successfully |
| 400 | Bad Request - Validation error |
| 404 | Not Found - Resource not found |
| 500 | Internal Server Error |

---

## Testing with cURL

### Create Enquiry
```bash
curl -X POST http://localhost:5000/api/enquiry \
  -H "Content-Type: application/json" \
  -d '{
    "name": "John Doe",
    "phone": "9876543210",
    "class": "12",
    "course": "JEE",
    "message": "I want to join JEE coaching"
  }'
```

### Get All Enquiries
```bash
curl http://localhost:5000/api/enquiry
```

### Get Enquiry by ID
```bash
curl http://localhost:5000/api/enquiry/507f1f77bcf86cd799439011
```

### Update Enquiry
```bash
curl -X PUT http://localhost:5000/api/enquiry/507f1f77bcf86cd799439011 \
  -H "Content-Type: application/json" \
  -d '{"status": "contacted"}'
```

### Delete Enquiry
```bash
curl -X DELETE http://localhost:5000/api/enquiry/507f1f77bcf86cd799439011
```

### Health Check
```bash
curl http://localhost:5000/api/health
```
