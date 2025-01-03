# NocoBase Security Guide

NocoBase prioritizes data and application security from functional design to system implementation. The platform incorporates multiple security features such as user authentication, access control, and data encryption, while allowing flexible configuration of security policies based on actual needs. Whether it's protecting user data, managing access permissions, or isolating development and production environments, NocoBase provides practical tools and solutions. This guide aims to provide instructions for securely using NocoBase, helping users protect data, applications, and environments, ensuring efficient use of system functions while maintaining user security.

## User Authentication

User authentication is used to identify user identities, prevent unauthorized access to the system, and ensure that user identities are not misused.

### Token Strategy

By default, NocoBase uses JWT (JSON Web Token) for server API authentication and supports the following Token strategies:

| Configuration Item              | Description                                                                                                                                                                                  |
| ------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Session Validity                | The maximum valid time for each user login. Within the session validity period, the Token is automatically renewed. After the timeout, the user is required to log in again.                 |
| Token Validity                  | The validity period of each issued API Token. After the Token expires, if it is within the session validity period and has not exceeded the refresh time limit, the server will automatically issue a new Token to maintain the user session; otherwise, the user is required to log in again. (Each Token can only be refreshed once.) |
| Expired Token Refresh Time Limit | The maximum time limit allowed for refreshing an expired Token                                                                                                                                 |

Typically, we recommend administrators:

- Set a short Token validity period to limit Token exposure time.
- Set a reasonable session validity period, longer than the Token validity period but not excessively long, to balance user experience and security. Utilize the Token auto-refresh mechanism to ensure active user sessions are not interrupted while reducing the risk of long-term session misuse.
- Set a reasonable expired Token refresh time limit, so that Tokens naturally expire without issuing new Tokens when users are inactive for a long time, reducing the risk of misuse of idle user sessions.

![](https://static-docs.nocobase.com/202501031613500.png)

### Token Client Storage

By default, user Tokens are stored in the browser's LocalStorage. If the Token is still valid when the browser page is reopened, the user does not need to log in again.

If you want users to log in again every time they enter the page, you can set the environment variable `API_CLIENT_STORAGE_TYPE=sessionStorage` to save the user Token in the browser's SessionStorage, achieving the goal of requiring users to log in again each time they open the page.

### Password Policy

> Professional Edition and above

NocoBase supports setting password rules and password login attempt lockout policies for all users to enhance the security of NocoBase applications that have password login enabled. You can refer to [Password Policy](./password-policy/index.md) to understand each configuration item.

#### Password Rules

| Configuration Item                     | Description                                                     |
| -------------------------------------- | -------------------------------------------------------------- |
| **Password Length**                    | The minimum length requirement for passwords, with a maximum length of 64. |
| **Password Complexity**                | Set the complexity requirements for passwords, including the types of characters that must be included. |
| **Username Cannot Be Included in Password** | Set whether the password can include the current user's username. |
| **Remember Password History**          | Remember the number of recently used passwords. Users cannot reuse these passwords when changing their password. |

#### Password Expiration Configuration

| Configuration Item                   | Description                                                                                                                                   |
| ------------------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------- |
| **Password Validity Period**         | The validity period of the user's password. After the password expires, the administrator needs to reset the password before the user can log in using the password.<br>If other login methods are configured, users can use those methods to log in. |
| **Password Expiration Notification Channel** | Within 10 days of the user's password expiration, a reminder is sent each time the user logs in.                                                                                     |

#### Password Login Security

| Configuration Item                             | Description                                                                                                                                |
| ---------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------- |
| **Maximum Invalid Password Login Attempts**    | Set the maximum number of login attempts a user can make within a specified time interval.                                                |
| **Maximum Invalid Password Login Time Interval (seconds)** | Set the time interval for calculating the maximum number of invalid login attempts, in seconds.                                           |
| **Lockout Time (seconds)**                     | Set the time the user is locked out after exceeding the invalid password login limit (0 means no limit).<br>During the lockout period, the user is prohibited from accessing the system using any authentication method, including API keys. |

Typically, we recommend:

- Set strong password rules to reduce the risk of password guessing and brute-force attacks.
- Set a reasonable password validity period to force users to change their passwords regularly.
- Combine invalid password login attempts and time configurations to limit high-frequency password login attempts in a short period, preventing brute-force password cracking.
- In scenarios with strict security requirements, set a reasonable lockout time for users who exceed login limits. However, note that lockout time settings may be maliciously exploited, as attackers may intentionally enter incorrect passwords multiple times to lock out the target account, preventing normal use. In practice, IP restrictions and API rate limits can be used to prevent such attacks.
- Additionally, since password expiration or account lockout will prevent access to the system, including administrator accounts, it is recommended to set up multiple accounts with permissions to reset passwords and unlock users in the system.

![](https://static-docs.nocobase.com/202501031618900.png)

### User Lockout

> Professional Edition and above, included in the Password Policy plugin

Manage users locked out due to exceeding invalid password login limits. You can actively unlock them or add abnormal users to the lockout list. Once locked, users are prohibited from accessing the system using any authentication method, including API keys.

![](https://static-docs.nocobase.com/202501031618399.png)

### Single Sign-On (SSO)

> Commercial Plugin

NocoBase provides a rich set of SSO authentication plugins, supporting mainstream protocols such as OIDC, SAML 2.0, LDAP, and CAS. Additionally, NocoBase has a comprehensive authentication method extension interface, allowing rapid development and integration of other authentication types. Users can easily integrate existing IdPs with NocoBase, centrally managing user identities on the IdP to enhance security.
![](https://static-docs.nocobase.com/202501031619427.png)

### Two-Factor Authentication (2FA)

> Enterprise Edition

Two-factor authentication requires users to provide a second form of identity verification when logging in with a password, such as sending a one-time dynamic verification code to the user's trusted device to verify their identity, ensuring user identity is not misused and reducing the risk of password leakage.

### IP Access Control

> Enterprise Edition

NocoBase supports setting IP blacklists or whitelists for user access.

- In environments with strict security requirements, you can set an IP whitelist to allow only specific IPs or IP ranges to access the system, limiting unauthorized external network connections and reducing security risks at the source.
- In open network access conditions, if administrators detect abnormal access, they can set an IP blacklist to block known malicious IP addresses or suspicious sources, reducing security threats such as malicious scanning and brute-force attacks.
- Log records are retained for denied access requests.

## Permission Control

By setting different roles in the system and configuring corresponding permissions for these roles, you can finely control user access to resources. Administrators need to configure reasonably based on actual scenario needs to reduce the risk of system resource leakage.

### Roles and Permissions

NocoBase controls user access to resources by setting roles in the system, authorizing different roles, and binding users to corresponding roles. Each user can have multiple roles, and users can switch roles to operate resources from different perspectives. If the department plugin is installed, roles can also be bound to departments, allowing users to have roles bound to their department.

![](https://static-docs.nocobase.com/202501031620965.png)

### System Configuration Permissions

System configuration permissions include the following settings:

- Whether to allow configuration interface
- Whether to allow installing, enabling, and disabling plugins
- Whether to allow configuring plugins
- Whether to allow clearing cache and restarting the application
- Configuration permissions for each plugin

### Menu Permissions

Menu permissions control user access to different menu pages, including desktop and mobile.
![](https://static-docs.nocobase.com/202501031620717.png)

### Data Permissions

NocoBase provides fine-grained control over user access to system data, ensuring that different users can only access data relevant to their responsibilities, preventing overreach and data leakage.

#### Global Control

![](https://static-docs.nocobase.com/202501031620866.png)

#### Table-Level and Field-Level Control

![](https://static-docs.nocobase.com/202501031621047.png)

#### Data Range Control

Set the data range that users can operate. Note that the data range configured here is different from the data range configured in blocks. The data range configured in blocks is usually only used for front-end data filtering. If strict control over user access to data resources is required, it needs to be configured here, controlled by the server.

![](https://static-docs.nocobase.com/202501031621712.png)

## Data Security

NocoBase provides effective mechanisms to ensure data security during data storage and backup.

### Password Storage

NocoBase uses the scrypt algorithm to encrypt and store user passwords, effectively resisting large-scale hardware attacks.

### Environment Variables and Keys

When using third-party services in NocoBase, we recommend configuring third-party key information into environment variables and storing them encrypted. This not only facilitates configuration in different places but also enhances security. You can refer to the documentation for detailed usage methods.

:::warning
By default, keys are encrypted using the AES-256-CBC algorithm. NocoBase automatically generates a 32-bit encryption key and saves it to storage/.data/environment/aes_key.dat. Users should properly keep the key file to prevent it from being stolen. If data migration is needed, the key file must be migrated together.
:::

![](https://static-docs.nocobase.com/202501031622612.png)

### File Storage

If there is a need to store sensitive files, it is recommended to use cloud storage services compatible with the S3 protocol and use the commercial plugin File storage: S3 (Pro) to achieve private file read and write. If used in an intranet environment, it is recommended to use MinIO or other storage applications that support private deployment and are compatible with the S3 protocol.

![](https://static-docs.nocobase.com/202501031623549.png)

### Application Backup

To ensure application data security and avoid data loss, we recommend regularly backing up the database.

Open Source Edition users can refer to https://www.nocobase.com/en/blog/nocobase-backup-restore to use database tools for backup. We also recommend properly keeping backup files to prevent data leakage.

Professional Edition and above users can use the Backup Manager for backup. The Backup Manager provides the following features:

- Scheduled automatic backup: Periodic automatic backups save time and manual operations, ensuring data security.
- Sync backup files to cloud storage: Isolate backup files from the application service itself, preventing backup file loss due to server failure.
- Backup file encryption: Set passwords for backup files to reduce the risk of data leakage due to backup file leakage.

![](https://static-docs.nocobase.com/202501031623107.png)

## Runtime Environment Security

Properly deploying NocoBase and ensuring runtime environment security is one of the keys to ensuring NocoBase application security.

### HTTPS Deployment

To prevent man-in-the-middle attacks, we recommend adding SSL/TLS certificates to NocoBase application sites to ensure data security during network transmission.

### API Transmission Encryption

> Enterprise Edition

In environments with stricter data security requirements, NocoBase supports enabling API transmission encryption, encrypting API request and response content to avoid plaintext transmission and increase the difficulty of data cracking.

### Private Deployment

By default, NocoBase does not need to communicate with third-party services, and the NocoBase team does not collect any user information. Connection to the NocoBase server is only required when performing the following two operations:

1. Automatically downloading commercial plugins through the NocoBase Service platform.
2. Online identity verification and application activation for commercial edition users.

If you are willing to sacrifice some convenience, both operations can be completed offline without directly connecting to the NocoBase server.

NocoBase supports complete intranet deployment. Refer to:

- https://www.nocobase.com/en/blog/load-docker-image
- [Uploading Plugins to the Plugin Directory for Installation and Upgrade](../welcome/getting-started/plugin.md#uploading-plugins-to-the-plugin-directory-for-installation-and-upgrade)

### Multi-Environment Isolation

In practical use, we recommend enterprise users isolate testing and production environments to ensure the security of application data and runtime environments in production. Using the migration management plugin, application data can be migrated between different environments.

![](https://static-docs.nocobase.com/202501031627729.png)

## Auditing and Monitoring

### Audit Logs

> Enterprise Edition

NocoBase's audit log feature records user activity within the system. By recording key user operations and access behaviors, administrators can:

- Check user access IPs, devices, and operation times to promptly detect abnormal behaviors.
- Trace the operation history of data resources within the system.

![](https://static-docs.nocobase.com/202501031627719.png)

![](https://static-docs.nocobase.com/202501031627922.png)

### Application Logs

NocoBase provides various log types to help users understand system operation status and behavior records, promptly detect and locate system issues, and ensure system security and controllability from different dimensions. Main log types include:

- Request Logs: API request logs, including accessed URLs, HTTP methods, request parameters, response times, and status codes.
- System Logs: Record application runtime events, including service startup, configuration changes, error messages, and key operations.
- SQL Logs: Record database operation statements and their execution times, covering queries, updates, inserts, and deletions.
- Workflow Logs: Workflow execution logs, including execution times, runtime information, and error messages.