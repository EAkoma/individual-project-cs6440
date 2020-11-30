import runDBQuery as runQuery

def getSleep_all(data):
    query = """select * from sleep where email = \'"""+data['email']+"""\';"""
    records = runQuery.queryDB(query)
    return records

def getBloodp_all(data):
    query = """select * from bloodpress where email = \'"""+data['email']+"""\';"""
    records = runQuery.queryDB(query)
    return records

def getExercise_all(data):
    query = """select * from exercise where email = \'"""+data['email']+"""\';"""
    records = runQuery.queryDB(query)
    return records
