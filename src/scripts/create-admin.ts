import { ExecArgs } from "@medusajs/framework/types"
import { Modules } from "@medusajs/framework/utils"

export default async function createAdmin({ container }: ExecArgs) {
  const userService = container.resolve(Modules.USER)
  
  try {
    const user = await userService.create({
      email: "admin@example.com",
      password: "supersecret",
      first_name: "Admin",
      last_name: "User",
      role: "admin"
    })
    
    console.log("Admin user created successfully:", user)
  } catch (error) {
    console.error("Failed to create admin user:", error)
  }
}