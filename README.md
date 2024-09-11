***Gustavo Rivera - Proyect development***

**General considerations about software development**

1. Analysis
  * understand the business context
  * abstraction process
  * functional requirements:
    * use cases, services to offer.
  * non functional requirements (*quiality attributes*):
    * performance, response times, scalability, work loads, deployment, security.

2. Design
  * software architecture: based on the previous requirements.
    * layered, mvc, mpc, microservices, event oriented, hexagonal, microkernel, etc...
  * specify and design a database:
    * aspects to consider: read/write operations, the structure of the data, the data types, etc...
    * for example, in a sql db we have entities, relationships, e-r & relation models.
  * design an api 
    * define the specification of the api alinged with the functional requirements
    * define input parameters as well as outputs 
  * for each aspect we can define a set of technologies to be used.
    
**at the end of this step we have a general view of the system structure**

3. Development & Testing
  * get the licenses for the respective services
  * get training for the development team
  * choose work methodology and tools for workflow
    * jira, trello, slack, teams.
    * for example in scrum:
      -define product backlog, refine sprint backlog, schedule sprints, do retrospective etc...

4. Implementation/deploy

***In this section I will explain you the development process for this excersice.***
Improvements in the proposed design:
1. Analysis:
   **business context**: ecommerce, products, prices
  * we can consider that the price for a product can change in some moment due to a commercial decision.
  * in the same way the rate (tarifa) for a product can change.
  * considering these things is better to have the **final price field** for a product as a compute field in the price table.

   **information redundancy**
   At the table *prices* we have the respective dates and priorities for a rate (tarifa), we have also the brand_id.
   * brand_id: it can be the pk for the brand table, and it can be a fk for the product table, so it is not necessary to replicate this data in the prices table.
   * dates (start_date, end_date) and priority rate: these fields should be in the rate (tarifa) table, therefore it is not necessary to replicate this data in the prices table.
     ![image](https://github.com/user-attachments/assets/ee5f5430-5149-4372-baae-379e6bd084de)




