import requests
import json
import pandas

query = """{
    poems {
      author
      body
      id
      title
    }
  }"""

url = 'http://54.84.32.82/graphql'
query = { 'query' : query }
# api_token = "your api token here..."
# headers = {'Authorization': 'token %s' % api_token}

r = requests.post(url=url, json=query)
# print(r.text)
json_data = json.loads(r.text)
# print (json_data)

# {"data":{"listings":[{"description":"bar\n","id":"1","title":"Foo"},{"description":"Oh the nights were long and dark","id":"2","title":"This is a longer thing"}]}}

df_data = json_data['data']['listings']
df = pandas.DataFrame(df_data)

print(df)
