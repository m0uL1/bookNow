import requests
import json
import boto3
import base64

request = requests.Session()

s3 = boto3.client(
        "s3",
        endpoint_url="https://sgp1.digitaloceanspaces.com",
        aws_access_key_id="RWK",
        aws_secret_access_key="U5els",
    )

def login():
	req = request.post("https://auth.api.edvora.me/login/",json={'username':'akash','password':'pass'})
	if req.status_code!=200:
		raise Exception
	auth = base64.b64encode(req.content).decode('utf-8')
	return {'Authorization':auth}
	
	
def deleteFiles():
	objects = []
	# dict_ keys are filepaths
	for i in dict_.keys():
		objects.append( {"Key": i} )
		
	response = s3.delete_objects(Bucket="amazing-aardvark",
		Delete={
			"Objects": objects,
			'Quiet': True
			},
		)

	# need to change here, response contains successfully deleted paths and error return filepaths.
	# we just return successfully deleted ids
	return list(dict_.values()) ## case: here all are successfully deleted  
	## if not, we need to fetch successfullyy deleted paths from "response"


def cleanBucket():
	header = login()
	try:
		req = requests.get("http://0.0.0.0:5000/expire/fetchExpireFile",headers=header)
		if req.status_code == 200:
			fetchJson = req.json()
			return fetchJson
		else:
			raise Exception
	except:
		return	
	
	list_ = deleteFiles()
	try:
		req = requests.get("http://0.0.0.0:5000/expire/confirm", headers = header, json= {"idList":list_})
	except:
		return	
cleanBucket()
