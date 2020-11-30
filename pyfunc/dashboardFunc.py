import runDBQuery as runQuery

def getDashboard_sleep_hours(data):
    if data['type'] == 'total':
        if data['timePeriod']=='alltime':
            query = """select date_time, SUM(sleep_dur) from sleep where email = \'"""+data['email']+"""\' and date_time <= current_date GROUP BY date_time;"""
            records = runQuery.queryDB(query)
            return records
        else:
            query = """select date_time, SUM(sleep_dur) from sleep where email = \'"""+data['email']+"""\' and date_time >= (current_date-INTERVAL \'"""+data['timePeriod']+""" days\') and date_time <= current_date GROUP BY date_time;"""
            records = runQuery.queryDB(query)
            return records
    else:
        if data['timePeriod']=='alltime':
            query = """select date_time, SUM(sleep_dur) from sleep where email = \'"""+data['email']+"""\' and date_time <= current_date and when_sleep = \'"""+data['type']+"""\' GROUP BY date_time;"""
            records = runQuery.queryDB(query)
            return records
        else:
            query = """select date_time, SUM(sleep_dur) from sleep where email = \'"""+data['email']+"""\' and date_time >= (current_date-INTERVAL \'"""+data['timePeriod']+""" days\') and date_time <= current_date and when_sleep = \'"""+data['type']+"""\' GROUP BY date_time;"""
            records = runQuery.queryDB(query)
            return records


def getDashboard_exercise_hours(data):
    if data['type'] == 'total':
        if data['timePeriod']=='alltime':
            query = """select date_time, SUM(cast (duration as float)) from exercise where email = \'"""+data['email']+"""\' and date_time <= current_date GROUP BY date_time;"""
            records = runQuery.queryDB(query)
            return records
        else:
            query = """select date_time, SUM(cast (duration as float)) from exercise where email = \'"""+data['email']+"""\' and date_time >= (current_date-INTERVAL \'"""+data['timePeriod']+""" days\') and date_time <= current_date GROUP BY date_time;"""
            records = runQuery.queryDB(query)
            return records
    else:
        if data['timePeriod']=='alltime':
            query = """select date_time, SUM(cast (duration as float)) from exercise where email = \'"""+data['email']+"""\' and date_time <= current_date = \'"""+data['type']+"""\' GROUP BY date_time;"""
            records = runQuery.queryDB(query)
            return records
        else:
            query = """select date_time, SUM(cast (duration as float)) from exercise where email = \'"""+data['email']+"""\' and date_time >= (current_date-INTERVAL \'"""+data['timePeriod']+""" days\') and date_time <= current_date = \'"""+data['type']+"""\' GROUP BY date_time;"""
            records = runQuery.queryDB(query)
            return records


def getDashboard_sys_bp(data):
    if data['type'] == 'total':
        if data['timePeriod']=='alltime':
            query = """select date_time, SUM(sys_blood) from bloodpress where email = \'"""+data['email']+"""\' and date_time <= current_date GROUP BY date_time;"""
            records = runQuery.queryDB(query)
            return records
        else:
            query = """select date_time, SUM(sys_blood) from bloodpress where email = \'"""+data['email']+"""\' and date_time >= (current_date-INTERVAL \'"""+data['timePeriod']+""" days\') and date_time <= current_date GROUP BY date_time;"""
            records = runQuery.queryDB(query)
            return records
    else:
        if data['timePeriod']=='alltime':
            query = """select date_time, SUM(sys_blood) from bloodpress where email = \'"""+data['email']+"""\' and date_time <= current_date = \'"""+data['type']+"""\' GROUP BY date_time;"""
            records = runQuery.queryDB(query)
            return records
        else:
            query = """select date_time, SUM(sys_blood) from bloodpress where email = \'"""+data['email']+"""\' and date_time >= (current_date-INTERVAL \'"""+data['timePeriod']+""" days\') and date_time <= current_date = \'"""+data['type']+"""\' GROUP BY date_time;"""
            records = runQuery.queryDB(query)
            return records


def getDashboard_dia_bp(data):
    if data['type'] == 'total':
            if data['timePeriod']=='alltime':
                query = """select date_time, SUM(dia_blood) from bloodpress where email = \'"""+data['email']+"""\' and date_time <= current_date GROUP BY date_time;"""
                records = runQuery.queryDB(query)
                return records
            else:
                query = """select date_time, SUM(dia_blood) from bloodpress where email = \'"""+data['email']+"""\' and date_time >= (current_date-INTERVAL \'"""+data['timePeriod']+""" days\') and date_time <= current_date GROUP BY date_time;"""
                records = runQuery.queryDB(query)
                return records
    else:
            if data['timePeriod']=='alltime':
                query = """select date_time, SUM(dia_blood) from bloodpress where email = \'"""+data['email']+"""\' and date_time <= current_date = \'"""+data['type']+"""\' GROUP BY date_time;"""
                records = runQuery.queryDB(query)
                return records
            else:
                query = """select date_time, SUM(dia_blood) from bloodpress where email = \'"""+data['email']+"""\' and date_time >= (current_date-INTERVAL \'"""+data['timePeriod']+""" days\') and date_time <= current_date = \'"""+data['type']+"""\' GROUP BY date_time;"""
                records = runQuery.queryDB(query)
                return records
