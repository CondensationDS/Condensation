<p align="center">
  <br>
  <br>
  <img src="https://preview.condensation.io/assets/img/condensation-long-icon.svg" alt="Condensation" width="460">
  <br>
</p>

<h1 align="center">
  A general-purpose distributed database
  <br>
  with inherent end-to-end security
</h1>

<br>

## About
Condensation enables to build modern applications while ensuring data ownership and security.
It's a one stop open source project to match the next decades complex security challenges and to protect digital rights.

**What you can build with**
* Build any kind of app secured by design, with real end-to-end encryption.
* Build collaborative tools such as google doc, but with control on the code and the privacy.
* Build distributed systems where each user can store data on his server while synchronizing with others.

## Motivation

The structure of today's file and database systems dates back to the 1970s, when storage space was extremely scarce, and computers were few. These systems were therefore designed to run on a single machine, and sometimes on a single disk.

While both database and file systems have greatly evolved over time, their main structure has hardly changed. Database systems are based on tables with mutable records (rows), while file systems use a hierarchy of folders with mutable files inside. In both systems, data can be modified with little effort, and at any time. Data synchronization, however, is notoriously difficult and error-prone.

In todays' connected world, data is used on different devices, or shared with other people. Hence, efficient data synchronization is key.

Aside of file and database systems, revision control systems have been developed and used since the 1980s. Some of them, like git or hq, are fully distributed, and do not require any central server whatsoever. Each user has his/her own version of the data, and can merge changes from other users. Such systems allow for efficient and provably correct data synchronization.

While they are great for source code management, current revision control systems are not suited as general purpose data systems. In order to benefit from such systems, the user needs to have a minimal understanding of branches, merging and conflict resolution, which is far beyond the knowledge of an average computer user. In addition, occasional merge conflicts are inevitable, and prevent such systems from being used in a transparent way.

The Condensation data system has been designed from the ground up to address this. The result is a general-purpose data system with lightweight transactions and efficient data synchronization in a completely distributed setting. Merge conflicts are impossible by design, so that no user intervention is required during the synchronization process. The data itself is end-to-end encrypted, and may be spread across multiple storage systems.
<br><br>
[White-paper](https://condensationdb.com/white-paper/)<br>
[Related article](https://www.inkandswitch.com/local-first.html)

## How it works

Inspired by the blockchain system, the email system, and git versioning, Condensation's architecture is a unique solution to develop scalable and modern applications, excelling at synchronization.

**Condensation manages data locally** <br>
Compared to commonly centralized databases, Condensation writes and reads data directly on the user's device in something similar to a document database with attributes. When edited, this document is splitted dynamically into immutable objects or pieces of the document containing the history of changes.

**Then, encrypted objects circulate through the network** <br>
Condensation does not need to decrypt data as it is the case for classic SQL and NoSQL databases. This erradicates the danger of data breaches. The data can circulate freely as objects are recognized by their address and not their content. The content stays encrypted until its received on the end user's device.

**Finally, data is condensated on the user's device** <br>
As objects can circulate and be stored freely, Condensation provides mechanics to reassemble and update the data when it arrives on the user's device. Everything is synchronized automatically without additionnal implementations for application makers. <br>

It results in a new kind of system where users can collaborate while keeping the ownership of their data.

## Get started

Condensation Java implementation is stable but we are still packaging it, preparing instructions for the installation, and building the first tutorials. The most advanced developers can already get into the code with the following link.<br>

[Source code](https://github.com/CondensationDB/Condensation/tree/main/Get-the-code)<br>

If you have a strong desire to contribute, please just get in touch at info@condensationDB.com, we will walk through the installation together.

## Project roadmap

- [x] Research and development of the conflict free merge
- [x] Develop the messaging system
- [x] Develop the end-to-end encryption
- [x] Package and publish Java version (Jan. 2021)
- [ ] Release the [white-paper](https://condensationdb.com/white-paper/) (Feb. -> Mar. 2021)
- [ ] Publish first pilot with Microcontroller integration (May. 2021)
- [ ] Port the code to Javascript for web apps development (Jul. 2021)
- [ ] Port to Swift version for iOS (Nov. 2021)

## Contribute

**Raising awareness and educating about Condensation**
The first thing we want is to educate on how innovative is Condensation to build solutions. Indeed, this new kind of database bridging the gap between mutable and immutable structures, has many benefits such as end-to-end encryption, multi-device synchronization, collaboration, offline-first, and much more we didn't yet described. Producing educational material is critical to raise awareness about the project. It can be articles, use cases, diagrams, advices and testimonials from your experience. We build this community to support your content, we will always do the best to enhance your positive impact on the project.

**Contributing by porting the core**
The priority is now to port the code to other systems as Condensation is mainly on the client side. For the immutable part of Condensation, specifications are now exhaustively described and we are available to guide you into each step. If you are interested in contributing, we will give you more details on the next priorities and connect you with our pioneering community.

You can get in touch at info@condensationDB.com.

## Main links

[Website](https://condensationDB.com)<br>
[Documentation](https://condensation.io)<br>
[Source code](https://github.com/CondensationDB/Condensation/tree/main/Get-the-code)<br>

## Thanks to our sponsors

<img src="https://preview.condensation.io/assets/img/SPEI.png" alt="SPEI" height="120"><img src="https://preview.condensation.io/assets/img/Innosuisse.png" alt="Innosuisse" height="120">

## Become a contributor

We are actively developing Condensation, if you want to invest, to contribute or to develop a pilot please reach out at info@condensationDB.com
