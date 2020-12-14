import { created, serverError, ok } from 'wix-http-functions';
import { mediaManager } from 'wix-media-backend';
import wixData from 'wix-data';
import rp from 'request-promise';

const collection = 'MondayData';

export function post_create(request) {
	let options = {
		"headers": {
			"Content-Type": "application/json"
		},
		suppressAuth: true,
	};
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

export function uploadFile(url) {
  return rp.get({ url, encoding: null })
    .then( (file) => {
      return mediaManager.upload(
        "/monday",
        file,
        url.substring(url.lastIndexOf('/')+1),
        {
          "mediaOptions": {
            "mimeType": "image/jpeg",
            "mediaType": "image"
          },
          "metadataOptions": {
            "isPrivate": false,
            "isVisitorUpload": false,
            "context": {
              "someKey1": "someValue1",
              "someKey2": "someValue2"
            }
          }
        }
      );
    } );
}

export async function post_upload(request) {
	let options = {
		"headers": {
		  "Content-Type": "application/json"
		}
	};
	  // get the request body
	try {
		const body = await request.body.json()
		const results = await uploadFile(body.file_url);
		options.body = {
			"uploaded": results
		};
		return ok(options);
	} catch (error) {
		options.body = {
			"error": error
		};
		return serverError(options);
	}
}

