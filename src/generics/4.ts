type User = {
 name: string;
 surname: string;
 email: string;
 password: string;
}

 function createOrUpdateUser(initialValues:Partial<User>) {
    // Оновлення користувача
    return initialValues.name = 'Illia';
}

createOrUpdateUser({ 
  email: 'user@mail.com', 
  password: 'password123' 
});
