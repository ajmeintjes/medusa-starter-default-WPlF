const { User } = require('@medusajs/medusa'); // Assuming Medusa is used
const dotenv = require('dotenv');
dotenv.config(); // Load environment variables from .env file

const { adminEmail, adminPassword, adminRole } = process.env;

async function createAdminUser() {
  try {
    // Check if an admin user already exists
    const existingAdmin = await User.findOne({ where: { email: adminEmail } });

    if (!existingAdmin) {
      // Create a new admin user if none exists
      const newAdmin = await User.create({
        email: adminEmail,
        password: adminPassword,
        role: adminRole || 'admin', // Default role if not provided
      });
      console.log('Admin user created:', newAdmin);
    } else {
      console.log('Admin user already exists.');
    }
  } catch (error) {
    console.error('Error creating admin user:', error);
  }
}

// Execute the function to create the admin user
createAdminUser();
