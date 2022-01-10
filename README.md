![](/Images/GitHub-Banner.png)

# A tool to build distributed applications with data ownership

## What is Condensation ?

### Overview
Condensation is a **open-source general-purpose distributed data system**. Its implementation provides **conflict-free synchronization**, **data integrity**, and **end-to-end security** by design. It is a lightweight solution representing around 15000 lines of code, and composed of three modules:

1. :memo: _A client module :_ the core module allowing to structure the data from a local mutable database into an immutable blockchain. It can be installed in web, mobile, or IoT client application.</br></br>
2. :floppy_disk: _A storage module :_ this module can be installed on a cloud, on a private server, or on personal device in order to store the data.</br></br>
3. :closed_lock_with_key: _An encryption module :_ the data is end-to-end encrypted with industry-proven algorithms from existing libraries.</br></br>

Condensation remains simple to learn as it offers an API in the form of a document database. No specific background in blockchain or related technologies is required to be able to build applications with Condensation. 

### Key features 
_1. For the user_
- Offline-first
- Versioning
- Digital certification 
- Collaborative editing
- Reduced loading time

_2. For the infrastructure_
- End-to-end encryption
- Live back-up
- Parallelized computation
- Unconstrained storage location
- Peer-to-peer synchronisation

## What are Condensation's motivations?

While both database and file systems have greatly evolved over time, their main structure has hardly changed. Database systems are based on tables with mutable records (rows), while file systems use a hierarchy of folders with mutable files inside. In both systems, data can be modified with little effort, and this at any time. Data synchronization, however, is notoriously difficult and error-prone. To perform such operations data has always been collected, processed and merged in servers, today organized in clouds, in a centralized manner. With Condensation we believe that we can change this paradigm by providing a solution to share and synchronize data in a distributed manner. 

### Providing a simple tool for building distributed and scalable infrastructures

Distributing our processes is advantageous for several reasons:
- _Ownership :_ Delegating the storage and the processing of our data to a third-party brings some contraints (we can do only what the third party allows us to do), and security risks (for example our data can be read by the third party).
- _Speed :_ Transporting data is always slower than processing it where it is generated. Moreover, our solution has the clear advantage of circumventing intermediate parties.
- _Costs :_ Storage, transportation and data processing have a non negligeable costs. If it can be done by the device itself it is always beneficial.

<p align="center">
  <img src="/Images/CentralizedDistributed.jpg" alt="distributed" width="480"/>
<p align = "center"><em>Today, we lack tools to develop fully distributed applications</em></p>
</p>

### Providing a tool which maintains the full ownership of the data

Most applications work with data systems that are centralized in clouds, which means that all the data involved flows through "someone else's computers". It is very difficult today for many companies to keep the ownership of their data. These companies need to trust a third party, like cloud companies, and adapt to their constraints and prices. With this project we aim to provide a tool allowing the development of modern and highly scalable applications without needing to trust a third party.  </br>

Condensation allows to use clouds as just data storage. In this set up, data remains fully encrypted when in the cloud company's hands. All the processing and more importantly data synchronization in between the different users can be done outside from the cloud, on the users's devices, or on the data owner's servers.
 </br>
 
### Providing a tool for building collaborative & conflict-free applications

<p align="center">
  <img align="left" src="/Images/onlylogosVersion.jpg" alt="version control" width="130"/>
</p>
</br>
On one side, even if they are great for source code management, current revision control systems are not suited as general purpose data systems. In order to benefit from such tools, the user needs to have a minimal understanding of branches, merging and conflict resolution, which is far beyond the knowledge of an average computer user.</br></br>

<p align="center">
  <img align="right" src="/Images/onlylogosCollab.jpg" alt="collaborative" width="130"/>
</p>
On the other side, collaborative applications for all still present several drawbacks, for now difficult to overcome. These tools can hardly work offline, because they need to permanently synchronize with a central version that is found on the cloud. Moreover the document size on which users can collaborate is limited by the transport on the network. Documents need to be shared entirely to be compared, which also increases importantly the latency in transport and processing.</br></br>

With Condensation users do not need to share entire documents to synchronize, but only the last changes. They can easily work offline because synchronization can be done in peer-to-peer, there is no need of a central ground-truth that is used to synchronize everybody. The merge algorithm is Condensation's secret sauce. It is highly efficient and allows to avoid latency and conflict issues.

## How does it work ?
</br>

<p align="center">
  <img align="left" src="/Images/freepik-document-icon.png" alt="doc icon" width="55"/>
</p>
1. Condensation's user interface works like a database, it organizes the data <b>locally</b> into flexible documents. From a developer's point of view, this makes it easy to get hands on the tool and to develop client applications. </br></br>
<p align="center">
  <img align="left" src="/Images/kosonicon-blockchain-icon.png" alt="bc icon" width="60"/>
</p>
2. Condensation turns each document into a <b>blockchain</b> in order to guaranty its integrity when sharing it on the network.</br></br></br>
<p align="center">
  <img align="left" src="/Images/freepik-storage-icon.png" alt="storage icon" width="55"/>
</p>
3. Because the data integrity is ensured at any time, the data can be stored anywhere, for example on a personal device, on a private server or on a public cloud.</br></br>
<p align="center">
  <img align="left" src="/Images/dinosoftlabs-lock-icon.png" alt="lock icon" width="60"/>
</p> 
4. Moreover, Condensation <b>encrypts</b> the data with AES, one of the safest and most widespread algorithms for digital security. Data privacy is ensured from <b>end-to-end</b>. The data sender's identity is controlled with using a <b>digital signature</b> based on the RSA algorithm. </br></br>
<p align="center">
  <img align="left" src="/Images/webalys-mail-icon.png" alt="mail icon" width="53"/>
</p> 
5. When synchronizing, users only need to share the last changes that were made instead of the entire document. This is allowed by the blockchain structure of the documents. This reduced amount of shared data deeply improves <b>peer-to-peer</b> synchronization. </br></br>
<p align="center">
  <img align="left" src="/Images/freepik-venn-icon.png" alt="merge icon" width="55"/>
</p> 
6. Condensation secret sauce is a very <b>performant merge</b> algorithm, based on join-semilattice, allowing efficient and <b>conflict-free</b> synchronization without any data loss. </br>

## Getting starded 
Condensation Java implementation is stable but we are still packaging it, preparing instructions for the installation, and building the first tutorials. The most advanced developers can already get into the code with the following link.
[Source code](https://github.com/CondensationDB/Condensation/tree/main/Get-the-code)

Do not hesitate to contact us for a POC at community@condensationDB.com. We would be very happy to collaborate with you. 

## Contribute 

### We need you 

We need your help for : 
- _**Raising awareness and educating about Condensation.**_ Firstly, we would like to raise awareness on the innovative contributions that Condensation brings to the development world. Because this new kind of database bridges the gap between mutable and immutable structures, producing educational material is critical to put Condensation's project forward. We are open to many type of contributions, like articles, use cases, diagrams, tutorials, advices and testimonials from your experience. Today, we are building this community in order to support your content, we will always do our best to foster your positive impact on the project.

- _**Developing the core of Condensation.**_ Another priority is now to port the code to other languages (e.g. Javascript, Swift) since Condensation is mostly developed on Java as of today. For the immutable part of Condensation, specifications are now exhaustively described and we are available to guide you into each step. If you are interested in contributing, we will give you more details on the next priorities and connect you with our pioneering community.

### Become a contributor 
We are actively developing Condensation, if you want to invest, to contribute or to develop a pilot please reach out at community@condensationDB.com, and join our discord CDS - Condensation Data System.

## Main links

- [Condensation website](https://condensationdb.com/)
- [Condensation documentation](https://condensation.io/)
- [Get the code](https://github.com/CondensationDB/Condensation/tree/main/Get-the-code)

## Who we are 
### The team 
**Condensation author** : </br>
Thomas Lochmatter, PhD, Teacher at EPFL [meet him](https://viereck.ch/thomas/)

**Early contributors** :
- Alex Mouradian, project coordination
- Zafar Ansari, infrastructure and development lead
- Lou Locci, education and content management
### Many thanks to our sponsors 
- [SPEI](https://www.vd.ch/toutes-les-autorites/departements/departement-de-leconomie-de-linnovation-et-du-sport-deis/service-de-la-promotion-de-leconomie-et-de-linnovation-spei/)
- [Innossuisse](https://www.innosuisse.ch/inno/fr/home.html)
- [EPFL](https://www.epfl.ch/fr/)

