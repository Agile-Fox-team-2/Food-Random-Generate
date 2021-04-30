# FancyTodo-Server

**Base URL**

http://localhost:3000

# Todos

## **_Register_**

Returns new user.

- **URL**

  /register

- **Method:**

  `POST`

- **URL Params**

  None

- **Data Params**

  **Required:**

  ```
    {
      firstName: req.body.firstName,
      lastName: req.body.lastName
      email: req.body.email,
      password: req.body.password
    }
  ```

- **Success Response:**

  - **Code:** 201 <br />
    **Content:**

    ```
    {
      {
        message: "User registered successfully"
      }
    }
    ```

- **Error Response:**

  - **Code:** 400 <br />
    **Content:**
    ```
    { errors : "SequelizeValidationError" }
    ```

  OR

  - **Code:** 500 <br />

- **Sample Call:**

  ```javascript
  $.ajax({
  	method: "POST",
  	url: `http://localhost:3000/register`,
  	data: {
  		firstName,
  		lastName,
  		email,
  		password,
  	},
  });
  ```

---

## **_Login_**

Returns new user.

- **URL**

  /signin

- **Method:**

  `POST`

- **URL Params**

  None

- **Data Params**

  **Required:**

  ```
    {
      email: req.body.email,
      password: req.body.password
    }
  ```

- **Success Response:**

  - **Code:** 200 <br />
    **Content:**

    ```
    {
      "access_token": <user access_token>
    }
    ```

- **Error Response:**

  - **Code:** 401 <br />
    **Content:**
    ```
    {
      "errors": [
          "Wrong email or password"
      ]
    }
    ```

  OR

  - **Code:** 500 <br />

- **Sample Call:**

  ```javascript
  $.ajax({
  	method: "POST",
  	url: `http://localhost:3000/signin`,
  	data: {
  		email,
  		password,
  	},
  });
  ```

---

## **_Random Food_**

Returns new food.

- **URL**

  /foods/random

- **Method:**

  `GET`

- **URL Params**

  None

- **Data Params**

- **Success Response:**

  - **Code:** 201 <br />
    **Content:**

    ```
    {
      title: <food title>,
      servings: <food servings>,
      image: "<food image",
      diets: <food diets>,
      anylizedInstructions: <food instructions>,
      sourceUrl: <food url>
    }
    ```

- **Error Response:**

  - **Code:** 500 <br />

- **Sample Call:**

  ```javascript
  $.ajax({
  	method: "GET",
  	url: "http://localhost:3000/foods/random",
  	headers: {
  		token: localStorage.getItem("token"),
  	},
  });
  ```

---

## **_Foods_**

Returns foods.

- **URL**

  /foods

- **Method:**

  `GET`

- **URL Params**

  None

- **Data Params**

- **Success Response:**

  - **Code:** 201 <br />
    **Content:**

    ```
    [
      {
        title: <food title>,
        food_url: <food url>,
        UserId: "<food UserId>",
      },
      {
        title: <food title>,
        food_url: <food url>,
        UserId: "<food UserId>",
      }
    ]
    ```

- **Error Response:**

  - **Code:** 500 <br />

- **Sample Call:**

  ```javascript
  $.ajax({
  	method: "GET",
  	url: "http://localhost:3000/foods",
  	headers: {
  		access_token: localStorage.getItem("access_token"),
  	},
  });
  ```

---

## **_Add Food_**

Returns foods.

- **URL**

  /foods

- **Method:**

  `GET`

- **URL Params**

  None

- **Data Params**

- **Success Response:**

  - **Code:** 201 <br />
    **Content:**

    ```
    {
      title: <food title>,
      food_url: <food url>,
      UserId: "<food UserId>",
    }
    ```

- **Error Response:**

  - **Code:** 500 <br />

- **Sample Call:**

  ```javascript
  $.ajax({
  	method: "POST",
  	url: "http://localhost:3000/foods",
  	headers: {
  		access_token: localStorage.getItem("access_token"),
  	},
  	data: {
  		title,
  		food_url,
  	},
  });
  ```

---

## **_Remove Food_**

Remove foods.

- **URL**

  /foods/:id

- **Method:**

  `GET`

- **URL Params**

  None

- **Data Params**

- **Success Response:**

  - **Code:** 201 <br />
    **Content:**

    ```
    {
      success: true,
      message: "Food Successfully Deleted"
    }
    ```

- **Error Response:**

  - **Code:** 500 <br />

- **Sample Call:**

  ```javascript
  $.ajax({
  	method: "DELETE",
  	url: "http://localhost:3000/foods/:id",
  	headers: {
  		access_token: localStorage.getItem("access_token"),
  	},
  });
  ```

---
