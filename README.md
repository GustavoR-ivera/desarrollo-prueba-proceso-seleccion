***Gustavo Rivera - Project development***

**For software development I take into account this general considerations about**

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
  * database:
    * aspects to consider: read/write operations, the structure of the data (data structured, semi-structured, non-structured), the data types, etc...
    * for example, in a sql db we have entities, relationships, e-r & relation models.
  * apis/ communication between systems:
    * define the specification of the api alinged with the functional requirements
    * define input parameters as well as outputs
  * cloud technologies to be used.
  * for each aspect we can define a set of technologies to be used.
    
**at the end of this step I could have a general view of the system structure and its principal requirements**

3. Development & Testing
  * get the licenses for the respective services (payment services)
  * get training for the development team if necessary
  * choose work methodology and tools for workflow
    * apps: jira, trello, slack, teams.
    * agile methodology for example Scrum:
      -define product backlog, refine sprint backlog, schedule sprints, do retrospective etc...

4. Implementation/deploy...

***In this section I will explain you the development process for the excersice from my point of view***

i present some improvements for the proposed design given in the techical test:

1. Analysis:
   **business context, aspects to consider**:
    * *ecommerce*
    * *products*
    * *prices/rates (tarifas)*
    * *stores/brands*
  * we can consider that the price for a product can change in some moment due to a commercial decision.
  * in the same way the rate (tarifa) for a product can change.
  * considering these things is better to have the **final price field** for a product as a compute field in the price table.

   **information redundancy**
   At the table "prices" in the given test we have the respective dates and priorities for a rate (tarifa), we have also the brand_id.
   * brand_id: it can be the pk for the brand/store table, and it can be a fk for the product table (each product belongs or it's related with a store/brand), so it is not necessary to replicate this data in the prices table.
   * dates (start_date, end_date) and priority rate (fechas y prioridad de una tarifa): these fields should be in the rate (tarifa) table, therefore it is not necessary to replicate this data in the prices table.

2. Design:
   **db relational model with suggested modifications**
     ![image](https://github.com/user-attachments/assets/ee5f5430-5149-4372-baae-379e6bd084de)
   
   * Microservices architecture:
     * Scalability
     * Flexibilily
     * Testing
     * Detachable
     * Modularity
       
   * Api:
     Taking into account the previous considerations we have the following parameteres for the endpoint ():
        * input parameters:
           * product_id: integer
           * purchase_date: aaaa-mm-dd hh:mm:ss
        * output:
           * product_id
           * brand_id
           * id_rate (id_tarifa)
           * start_date
           * end_date
           * final_price
        * principal endpoint: /get-final-price/:product_id/:purchase_date
          
          ![image](https://github.com/user-attachments/assets/94a31189-0705-441e-a62f-606841c86d9f)

         
3. Development (technologies used):
    * nodejs: v22.7.0
    "dotenv": 16.4.5,
    "express": 4.20.0,
    "nodemon": 3.1.4,
    "sqlite3": 5.1.7,
    "jest": 29.7.0,
    "supertest": 7.0.0

***clone the repository or download the zip folder***

- check if you have nodejs on your system
- locate the product_prices folder and execute the "npm install" command
- start server: npm start / node index.js
- start tests:
   * linux:
      * package.json-> "scripts" -> "test": "NODE_OPTIONS=--experimental-vm-modules jest"
      * npm test
   * windows:
      * package.json-> "scripts" -> "test": "set NODE_OPTIONS=--experimental-vm-modules && jest"
      * npm test
         
***screenshot validation tests***

![image](https://github.com/user-attachments/assets/446741a7-a60e-4e09-bc60-d573394a29ae)


