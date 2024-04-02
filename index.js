// Add your code here
function submitData(name, email) {
    const formData = {
      name: name,
      email: email
    };
  
    const configObject = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify(formData)
    };
  
    return fetch("http://localhost:3000/users", configObject)
      .then(response => response.json())
      .then(data => {
        console.log(data);
        return data; 
        
      })
      .catch(error => {
        console.error('Error:', error);
        return error; 
      });
  }
  
  function submitData(name, email) {
    const formData = {
      name: name,
      email: email
    };
  
    const configObject = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify(formData)
    };
  
    return fetch("http://localhost:3000/users", configObject)
      .then(response => response.json())
      .then(data => {
        const id = data.id;
        const newElement = document.createElement('p');
        newElement.textContent = id;
        document.body.appendChild(newElement);
      })
      .catch(error => {
        console.error('Error:', error);
      });
  }
  
  function submitData(name, email) {
    const formData = {
      name: name,
      email: email
    };
  
    const configObject = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify(formData)
    };
  
    return fetch("http://localhost:3000/users", configObject)
      .then(response => response.json())
      .then(data => {
        const id = data.id;
        const newElement = document.createElement('p');
        newElement.textContent = id;
        document.body.appendChild(newElement);
      })
      .catch(error => {
        const errorMessage = document.createElement('p');
        errorMessage.textContent = error.message;
        document.body.appendChild(errorMessage);
      });
  }
 