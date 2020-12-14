import { created, serverError, ok } from 'wix-http-functions';
import wixData from 'wix-data';

const collection = 'MondayData';
// https://fayez00.wixsite.com/website/_functions/create/
export function post_create(request) {
	let options = {
		"headers": {
			"Content-Type": "application/json"
		},
		suppressAuth: true,
	};
  // get the request body
	return request.body.json()
	.then( (body) => {
		return wixData.insert(collection, body, options);
	} )
	.then( (results) => {
		options.body = {
			"inserted": results
		};
		return created(options);
	} )
	.catch( (error) => {
		options.body = {
			"error": error
		};
		return serverError(options);
	} );
}


export function put_update(request) {
	let options = {
		"headers": {
		  "Content-Type": "application/json"
		}
	};
	  // get the request body
	return request.body.json()
	.then( (body) => {
		const itemId = body.itemId;
		delete body.itemId;
		wixData.query(collection).eq("itemId", 2010).find().then(results => {
			if(results.items.length > 0) {
				const items = results.items;
				// update the item in a collection
				for (let index = 0; index < items.length; index++) {
					const item = items[index];
					return wixData.update(collection, [
						...item, ...body
					]);
				}
			}
		});
	} )
	.then( (results) => {
		options.body = {
		"updated": results
		};
		return ok(options);
	} )
	// something went wrong
	.catch( (error) => {
		options.body = {
		"error": error
		};
		return serverError(options);
	} );
}



