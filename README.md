## >>>> We just moved our repo to an org and published the code [please star and follow the repositories out there](https://github.com/CondensationDB)<br>

<p align="center">
  <br>
  <br>
  <img src="https://preview.condensation.io/assets/img/logo.svg" alt="Condensation" width="300">
  <br>
  <br>
</p>

<h1 align="center">
  A general-purpose distributed database
  <br>
  with inherent end-to-end security
</h1>

## About
Condensation enables to build modern applications while ensuring data ownership and security.
It's a one stop open source project to match the next decades complex security challenges and to protect digital rights.

## Motivation

The structure of today's file and database systems dates back to the 1970ties, when storage space was extremely scarce, and computers were few. These systems were therefore designed to run on a single machine, and sometimes on a single disk.

While both database and file systems have greatly evolved over time, their main structure has hardly changed. Database systems are based on tables with mutable records (rows), while file systems use a hierarchy of folders with mutable files inside. In both systems, data can be modified with little effort, and at any time. Data synchronization, however, is notoriously difficult and error-prone.

In todays' connected world, data is used on different devices, or shared with other people. Hence, efficient data synchronization is key.

Aside of file and database systems, revision control systems have been developed and used since the 1980ties. Some of them, like git or hq, are fully distributed, and do not require any central server whatsoever. Each user has his/her own version of the data, and can merge changes from other users. Such systems allow for efficient and provably correct data synchronization.

While they are great for source code management, current revision control systems are not suited as general purpose data systems. In order to benefit from such systems, the user needs to have a minimal understanding of branches, merging and conflict resolution, which is far beyond the knowledge of an average computer user. In addition, occasional merge conflicts are inevitable, and prevent such systems from being used in a transparent way.

The Condensation data system has been designed from the ground up to address this. The result is a general-purpose data system with lightweight transactions and efficient data synchronization in a completely distributed setting. Merge conflicts are impossible by design, so that no user intervention is required during the synchronization process. The data itself is end-to-end encrypted, and may be spread across multiple storage systems.
<br><br>
[Related article](https://www.inkandswitch.com/local-first.html)

## How it works

Inspired by the blockchain system, the email system, and git versioning, Condensation's architecture is a unique solution to develop scalable and modern applications.

**Condensation manages data locally**
Compared to commonly centralized databases, Condensation writes and reads data directly on the user's device. No image of the data needs to be created to communicate with a data center.

**Then, encrypted objects circulate through the network**
Condensation does not need to decrypt data as it is the case for classic SQL and NoSQL databases. This erradicates the danger of data breaches. The data can circulate freely as objects are recognized by their address and not their content. The content stays encrypted until its received on the end user's device.

**Finally, data is condensated on the user's device**
As objects can circulate and be stored freely, Condensation provides mechanics to reassemble and update the data when it arrives on the user's device.


## Project roadmap

- [x] Research and development of the conflict free merge
- [x] Develop the messaging system
- [x] Develop the end-to-end encrpytion
- [x] Package and publish Java version (Jan. 2021)
- [ ] Release the white paper (Feb. 2021)
- [ ] Publish first pilot with Microcontroller integration (May. 2021)
- [ ] Port the code to Javascript for web apps development (Jul. 2021)
- [ ] Port to Swift version for iOS (Nov. 2021)

## Contribute

We are currently building our contribution framework, if you are interested in contributing we can give you more details on the next priorities. You can get in touch at info@condensationDB.com

## Main links

[Website](https://condensationDB.com)<br>
[Documentation](https://docs.condensationDB.com)<br>
[Source code](https://docs.condensationDB.com)<br>

## Thanks to our sponsors

<img src="https://preview.condensation.io/assets/img/SPEI.png" alt="SPEI" height="120"><img src="https://preview.condensation.io/assets/img/Innosuisse.png" alt="Innosuisse" height="120">

## Get together

We are actively developing Condensation, if you want to invest, to contribute or to develop a pilot please reach out at info@condensationDB.com
