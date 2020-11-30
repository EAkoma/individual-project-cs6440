from flask import Flask, render_template, request
import json
import datetime
from pyfunc import loginFunc, insertFunc, displayFunc, dashboardFunc
import configparser
import os

app = Flask(__name__)


@app.route("/")
def index():
    return render_template("index.html")


@app.route("/getUserLogin", methods=["GET", "POST"])
def getCurrentState():
    data = request.get_json()
    user_email = data["email"]
    user_pass = data["password"]
    loginTrue, is_admin = loginFunc.login(user_email, user_pass)
    return json.dumps({"login": loginTrue, "isAdmin": is_admin})

@app.route("/insertSleep", methods=["GET", "POST"])
def insertSleep():
    data = request.get_json()
    raw_data = insertFunc.insertSleep(data)
    print(raw_data)
    return json.dumps(raw_data)

@app.route("/getSleep", methods=["GET", "POST"])
def getSleep():
    data = request.get_json()
    raw_data = displayFunc.getSleep_all(data)
    return json.dumps(raw_data)

@app.route("/insertBloodp", methods=["GET", "POST"])
def insertBloodp():
    data = request.get_json()
    raw_data = insertFunc.insertBloodp(data)
    print(raw_data)
    return json.dumps(raw_data)

@app.route("/getBloodp", methods=["GET", "POST"])
def getBloodp():
    data = request.get_json()
    raw_data = displayFunc.getBloodp_all(data)
    return json.dumps(raw_data)

@app.route("/insertExercise", methods=["GET", "POST"])
def insertExercise():
    data = request.get_json()
    raw_data = insertFunc.insertExercise(data)
    print(raw_data)
    return json.dumps(raw_data)

@app.route("/getExercise", methods=["GET", "POST"])
def getExercise():
    data = request.get_json()
    raw_data = displayFunc.getExercise_all(data)
    return json.dumps(raw_data)

@app.route("/getDashboardSleepHours", methods=["GET", "POST"])
def getDashboardSleepHours():
    data = request.get_json()
    raw_data = dashboardFunc.getDashboard_sleep_hours(data)
    return json.dumps(raw_data)

@app.route("/getDashboardExerciseHours", methods=["GET", "POST"])
def getDashboardExerciseHours():
    data = request.get_json()
    raw_data = dashboardFunc.getDashboard_exercise_hours(data)
    return json.dumps(raw_data)

@app.route("/getDashboardOfSysBP", methods=["GET", "POST"])
def getDashboardOfSysBP():
    data = request.get_json()
    raw_data = dashboardFunc.getDashboard_sys_bp(data)
    return json.dumps(raw_data)

@app.route("/getDashboardOfDiaBP", methods=["GET", "POST"])
def getDashboardOfDiaBP():
    data = request.get_json()
    raw_data = dashboardFunc.getDashboard_dia_bp(data)
    return json.dumps(raw_data)

if __name__ == "__main__":
    app.run(host="0.0.0.0")
