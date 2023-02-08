from pymongo import MongoClient
from rich import print


with MongoClient() as client:
    db = client.library
    pipelines = [
        {"$match": {"status": "PUBLISH"}}, # Operador para filtrar documentos por match
        {"$unwind": "$categories"}, 
        {"$group": {"_id": "$categories", "count": {"$sum": 1}}}, # Agrupar por categoria e contar ocorrencias
        {"$sort": {"count": -1}} # ordenar de forma decrescente
    ]
    for category in db.books.aggregate(pipelines): # Utiliza do agreggation framework do mongoDB para usar da sintaxe acima
        print(category["_id"], category["count"], sep=": ")