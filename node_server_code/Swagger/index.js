
/**Modal**/

//Business Model--------------------------------
/**
 * @swagger
 * definition:
 *   Business:
 *     properties:
 *         id:
 *            type: number
 *         name:
 *            type: string  
 *         building:
 *             type: string
 *         street:
 *             type: string      
 *         city:
 *             type: string
 *         state:
 *             type: string
 *         address:
 *             type: string      
 *         country:
 *             type: string
 *         pincode:
 *             type: string
 *         phone:
 *             type: number
 *         openhours:
 *             type: string
 *         landline:
 *             type: number
 *         facebook:
 *             type: string
 *         twitter:
 *             type: string
 *         google:
 *             type: string
 */


//-------------------------------------------------------------------------------------------------------------------------
  /**api**/

//Business------------------------

/**
 * @swagger
 * /api/business/create_business:
 *   post:
 *     tags:
 *       - Business
 *     produces:
 *       - application/json
 *     parameters:
 *       - in: "body"
 *         name: "body"
 *         required: true
 *         schema:
 *           $ref: '#/definitions/Business'
 *     responses:
 *       405:
 *         description: "Invalid input"
 */

 /**
 * @swagger
 * /api/business/update_business:
 *   put:
 *     tags:
 *       - Business
 *     produces:
 *       - application/json
 *     parameters:
 *       - in: "body"
 *         name: "body"
 *         required: true
 *         schema:
 *           $ref: '#/definitions/Business'
 *     responses:
 *       405:
 *         description: "Invalid input"
 */

 /**
 * @swagger
 * /api/business/getall_business:
 *   get:
 *     tags:
 *       - Business
 *     description: Returns all Business
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *        description: "ok"
 */

 /**
 * @swagger
 * /api/business/delete_business/{businessID}:
 *   delete:
 *     tags:
 *       - Business
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: "businessId"
 *         in: "path"
 *         description: "Business id to delete"
 *         required: true
 *         type: "integer"
 *         format: "int64"
 *     responses:
 *         400:
 *           description: "Invalid ID supplied"
 *         404:
 *           description: "Business not found"
 */
