from zeep import Client
from lxml import etree 
import xmlschema


client = Client('http://127.0.0.1:8000/soapAPI1/?wsdl')



def displayShowInfor(resultXMLtest):
    print("/////////////////////// Infor ////////////////////////////////////")
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


def displayShowStock(resultXMLtest):
    print("/////////////////////// Stock ////////////////////////////////////")
    utf8_parser = etree.XMLParser(encoding='utf-8')
    root = etree.fromstring(resultXMLtest.encode('utf-8'), parser=utf8_parser)
    # print(root)
    for food in root.findall('item'):
        print("name :",food.find('name').text)
        print("address :",food.find('address').text)
        print("weight :",food.find('weight').text)
        print("stataus_sended :",food.find('status_sended').text)
        # print("temp :",food.find('temp').text)
        # print("humid :",food.find('humid').text)
        # print("date :",food.find('date').text)
        print()


#################  Home work
######### set temperature and humid
# resultXMLtest = client.service.setTempData("81610",30.0,12.5)

######### get temperature and humid
# resultXMLtest = client.service.getTempData("get_temp")

#################  ข้อ 1
########## get information
# resultXMLtest = client.service.getInformation("get_information")
# print(resultXMLtest)


#################  ข้อ 2
######### set Data Weight
# resultXMLtest = client.service.setDataWeight("nSSSS Pundd", "475 m.9 a.maemoh t.maemoh city.lampage 52220", 5.3)
# print(resultXMLtest)

######## sended_something
resultXMLtest = client.service.sended_something()
# print(resultXMLtest)

######## check_stock_sended_all
resultXMLtest = client.service.check_stock_sended_all()
displayShowStock(resultXMLtest)



