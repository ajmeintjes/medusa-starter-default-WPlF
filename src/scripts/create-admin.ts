import { ExecArgs } from "@medusajs/framework/types"
import { ContainerRegistrationKeys, Modules } from "@medusajs/framework/utils"

export default async function createAdmin({ container }: ExecArgs) {
  const logger = container.resolve(ContainerRegistrationKeys.LOGGER)
  const userService = container.resolve(Modules.USER)

  try {
    const adminUser = await userService.create({
      email: "admin@example.com",
      password: "supersecret",
      role: "admin"
    })

    logger.info("Admin user created successfully:", adminUser)
    return adminUser
  } catch (error) {
    logger.error("Failed to create admin user:", error)
    throw error
  }
}