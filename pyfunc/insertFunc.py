import runDBQuery as runQuery


def insertSleep(data):
    #print(data)
    query = """
    INSERT INTO sleep (email, sleep_type, sleep_dur, date_time, when_sleep)
    VALUES (\'"""+data['email']+"""\',\'"""+data['sleep_type']+"""\', \'"""+data['sleep_dur']+"""\',\'"""+data['date']+"""\', \'"""+data['time']+"""\');"""

    records = runQuery.updateDB(query)
    print(records)
    return records

def insertBloodp(data):
    query = """
    INSERT INTO bloodpress (email, sys_blood, dia_blood, date_time)
    VALUES (\'"""+data['email']+"""\', \'"""+data['sys_bloodp']+"""\', \'"""+data['dia_bloodp']+"""\', \'"""+data['date']+"""\');"""

    records = runQuery.updateDB(query)
    print(records)
    return records

def insertExercise(data):
    query = """
    INSERT INTO exercise (email, exercise_name, exercise_type, duration, date_time)
    VALUES (\'"""+data['email']+"""\', \'"""+data['exer_name']+"""\', \'"""+data['exer_type']+"""\', \'"""+data['exer_dur']+"""\', \'"""+data['date']+"""\');"""

    records = runQuery.updateDB(query)
    print(records)
    return records


