## Encryption Methods & Libraries for Node.js

Encryption is a crucial aspect of securing data in any application. In Node.js, there are several methods and libraries available to perform encryption. Below, we will discuss some common encryption methods and popular libraries used in Node.js.

### Common Encryption Methods

1. **Symmetric Encryption**: This method uses the same key for both encryption and decryption. It is fast and efficient but requires secure key management.
   - **AES (Advanced Encryption Standard)**: A widely used symmetric encryption algorithm that provides strong security.

2. **Asymmetric Encryption**: This method uses a pair of keys, a public key for encryption and a private key for decryption. It is more secure but slower compared to symmetric encryption.
   - **RSA (Rivest-Shamir-Adleman)**: A popular asymmetric encryption algorithm used for secure data transmission.

3. **Hashing**: This method converts data into a fixed-size hash value, which is typically used for data integrity verification. Hashing is a one-way process and cannot be reversed.
   - **SHA (Secure Hash Algorithm)**: A family of cryptographic hash functions used to ensure data integrity.

### Popular Encryption Libraries in Node.js

1. **crypto**: The built-in `crypto` module in Node.js provides cryptographic functionality, including encryption, decryption, and hashing.
   - Example of AES encryption using `crypto`:
     ```javascript
     const crypto = require('crypto');
     const algorithm = 'aes-256-cbc';
     const key = crypto.randomBytes(32);
     const iv = crypto.randomBytes(16);

     function encrypt(text) {
       let cipher = crypto.createCipheriv(algorithm, Buffer.from(key), iv);
       let encrypted = cipher.update(text);
       encrypted = Buffer.concat([encrypted, cipher.final()]);
       return { iv: iv.toString('hex'), encryptedData: encrypted.toString('hex') };
     }

     function decrypt(text) {
       let iv = Buffer.from(text.iv, 'hex');
       let encryptedText = Buffer.from(text.encryptedData, 'hex');
       let decipher = crypto.createDecipheriv(algorithm, Buffer.from(key), iv);
       let decrypted = decipher.update(encryptedText);
       decrypted = Buffer.concat([decrypted, decipher.final()]);
       return decrypted.toString();
     }

     const encrypted = encrypt("Hello World");
     console.log(encrypted);
     const decrypted = decrypt(encrypted);
     console.log(decrypted);
     ```

2. **bcrypt**: A library for hashing passwords. It is based on the Blowfish cipher and is designed to be computationally intensive to protect against brute-force attacks.
   - Example of hashing a password using `bcrypt`:
     ```javascript
     const bcrypt = require('bcrypt');
     const saltRounds = 10;
     const myPlaintextPassword = 's0/\/\P4$$w0rD';

     bcrypt.hash(myPlaintextPassword, saltRounds, function(err, hash) {
       if (err) throw err;
       console.log(hash);
     });
     ```

3. **jsonwebtoken**: A library for generating and verifying JSON Web Tokens (JWT). JWTs are commonly used for authentication and secure data exchange.
   - Example of generating and verifying a JWT using `jsonwebtoken`:
     ```javascript
     const jwt = require('jsonwebtoken');
     const secretKey = 'your-256-bit-secret';

     // Generate a token
     const token = jwt.sign({ username: 'user1' }, secretKey, { expiresIn: '1h' });
     console.log(token);

     // Verify a token
     jwt.verify(token, secretKey, (err, decoded) => {
       if (err) {
         console.log('Token is invalid');
       } else {
         console.log('Token is valid', decoded);
       }
     });
     ```

These libraries and methods provide a solid foundation for implementing encryption in your Node.js applications. Always ensure to follow best practices for key management and stay updated with the latest security standards.
