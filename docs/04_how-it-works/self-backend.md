---
sidebar_position: 2
---


# Self hosted Backend
Realtimely connects to AWS, as described in [Architecture](/docs/how-it-works/architecture).
The current version only offers the option to connect with Realtimely's AppSync and has the following risks:

* Randomly generated user information and the user's actions are sent to a server that you do not manage and are temporarily reflected in the DB.
* If Realtimely goes out of service and destroys the AppSync endpoint and database, this library will stop working.


:::caution

Therefore, the current version of Realtimely is not Production Ready, and we recommend that you use it only at the PoC level.

:::

## How to self host backend

:::caution

In the current version, you don't have the option to build an equivalent backend in your AWS environment and switch URL endpoints.

:::

See [Roadmap](/docs/roadmap) for implementation schedules.