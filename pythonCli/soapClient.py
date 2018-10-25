from zeep import Client
from lxml import etree 
import xmlschema


client = Client('http://127.0.0.1:8000/soapAPI1/?wsdl')

# resultXMLtest = client.service.setTempData("81610",30.0,12.5)

resultXMLtest = client.service.getTempData("get_temp")

########## get information
resultXMLtest = client.service.getInformation("get_information")

print(resultXMLtest)

print("/////////////////////// result ////////////////////////////////////")
utf8_parser = etree.XMLParser(encoding='utf-8')
root = etree.fromstring(resultXMLtest.encode('utf-8'), parser=utf8_parser)
# print(root)
for food in root.findall('item'):
    print("id :",food.find('id').text)
    print("name :",food.find('name').text)
    print("hobby :",food.find('hobby').text)
    # print("temp :",food.find('temp').text)
    # print("humid :",food.find('humid').text)
    # print("date :",food.find('date').text)
    print()

