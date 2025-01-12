# DateTime Field Types

DateTime field types in NocoBase can be categorized to handle different types of time-related data. These types allow for flexibility in capturing and managing date and time information across various contexts, such as with or without time zones, only the date, or even using Unix timestamps for raw time data.

### DateTime Field Types

1. **DateTime (with Time Zone)**: 
   - Stores both date and time, and the value is standardized to UTC (Coordinated Universal Time). When displayed, it adjusts based on the user's time zone.

2. **DateTime (without Time Zone)**: 
   - Stores both date and time, but it does not include time zone information. The value is stored exactly as entered.

3. **Date (without Time)**: 
   - Stores only the date (year, month, and day) without any associated time component.

4. **Time**: 
   - Stores only the time (hours, minutes, and seconds), excluding any date information.

5. **Unix Timestamp**: 
   - Stores the number of seconds that have passed since January 1, 1970 (also known as the Unix epoch), as an integer value. This is used for precise and efficient representation of time.

### Examples for Each DateTime Field Type

| **Field Type**               | **Example Value**            | **Description**                                       |
|------------------------------|------------------------------|-------------------------------------------------------|
| DateTime (with Time Zone)     | 2024-08-24T07:30:00.000Z     | Converted to UTC and can be adjusted for time zones    |
| DateTime (without Time Zone)  | 2024-08-24 15:30:00          | Stores date and time without time zone considerations  |
| Date (without Time)           | 2024-08-24                   | Captures only the date, with no time information       |
| Time                          | 15:30:00                     | Captures only the time, excluding any date details     |
| Unix Timestamp                | 1724437800                   | Represents seconds since 1970-01-01 00:00:00 UTC       |

### Data Source Comparisons

The following table compares how different database systems handle DateTime-related field types.

| **Field Type**                | **NocoBase**               | **MySQL**                  | **PostgreSQL**                         |
|-------------------------------|----------------------------|----------------------------|----------------------------------------|
| DateTime (with Time Zone)      | Datetime with timezone     | TIMESTAMP<br/> DATETIME    | TIMESTAMP WITH TIME ZONE               |
| DateTime (without Time Zone)   | Datetime without timezone  | DATETIME                   | TIMESTAMP WITHOUT TIME ZONE            |
| Date (without Time)            | Date                       | DATE                       | DATE                                   |
| Time                           | Time                       | TIME                       | TIME WITHOUT TIME ZONE                 |
| Unix Timestamp                 | Unix timestamp             | INTEGER<br/>BIGINT         | INTEGER<br/>BIGINT                     |
| Time (with Time Zone)          | -                          | -                          | TIME WITH TIME ZONE                    |

**Note:**
- MySQL’s `TIMESTAMP` type has a limited range between `1970-01-01 00:00:01 UTC` and `2038-01-19 03:14:07 UTC`. For dates outside this range, use `DATETIME` or store Unix timestamps as `BIGINT`.

### DateTime Storage Processing Workflow

#### With Time Zone

This includes both **DateTime (with Time Zone)** and **Unix Timestamp** field types, which allow for storing and processing time data in a global context.

**Storage in NocoBase**:
- NocoBase uses the `DATETIME` type in MySQL for **DateTime (with Time Zone)** fields. The date value stored is converted to the server’s time zone, based on its `TZ` (time zone) environment variable. Therefore, if the server's time zone changes, the stored date/time value will also adjust accordingly.
- When displayed, the raw UTC time value might cause confusion due to differences between UTC and local times. For example, an event scheduled at `2024-08-24 07:30:00 UTC` will show differently based on the user’s time zone.

#### Without Time Zone

**Storage in NocoBase**:
- Fields like **DateTime (without Time Zone)** store the value exactly as entered, without adjusting for any time zone considerations.
- These fields are ideal for situations where time zone differences do not apply, or for cases like storing local events in a fixed time zone.

### UTC (Coordinated Universal Time)

UTC is the global standard for time and is widely used for synchronization across different regions. The key difference between UTC and local time zones is that the former is a universal standard, while the latter is region-specific and can vary depending on factors like daylight saving time.

Here’s an example of how the same moment in time is represented across different time zones:

| **Time Zone**   | **DateTime**                    |
|-----------------|---------------------------------|
| UTC             | 2024-08-24T07:30:00.000Z        |
| UTC+8           | 2024-08-24 15:30:00             |
| UTC+5           | 2024-08-24 12:30:00             |
| UTC-5           | 2024-08-24 02:30:00             |
| UTC+0           | 2024-08-24 07:30:00             |
| UTC-6           | 2024-08-23 01:30:00             |

As you can see, these different time representations all refer to the same exact moment, but the local time varies depending on the time zone of the user. The UTC time (`2024-08-24T07:30:00.000Z`) can be adjusted accordingly when displayed in local time for each user.
