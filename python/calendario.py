from flask import Flask, request
import calendar
from datetime import datetime

app = Flask(__name__)

@app.route("/")
def calendario():

    año = request.args.get("year", type=int)
    mes = request.args.get("month", type=int)

    hoy = datetime.now()

    if año is None:
        año = hoy.year

    if mes is None:
        mes = hoy.month

    cal = calendar.monthcalendar(año, mes)

    nombre_mes = calendar.month_name[mes]

    # Mes anterior
    prev_month = mes - 1
    prev_year = año

    if prev_month == 0:
        prev_month = 12
        prev_year -= 1

    # Mes siguiente
    next_month = mes + 1
    next_year = año

    if next_month == 13:
        next_month = 1
        next_year += 1

    html = f"""
    <html>

    <head>

    <title>Calendario</title>

    <style>

    body {{
        font-family: Arial;
        text-align: center;
        background: #f4f4f4;
    }}

    table {{
        margin: auto;
        border-collapse: collapse;
        width: 70%;
        background: white;
    }}

    th, td {{
        border: 1px solid #ccc;
        padding: 20px;
        width: 14%;
    }}

    th {{
        background: #2c3e50;
        color: white;
    }}

    td:hover {{
        background: #e8f0fe;
    }}

    .nav {{
        margin: 20px;
    }}

    a {{
        text-decoration: none;
        padding: 10px 20px;
        background: #3498db;
        color: white;
        border-radius: 5px;
        margin: 10px;
    }}

    </style>

    </head>

    <body>

    <h1>{nombre_mes} {año}</h1>

    <div class="nav">

        <a href="/?month={prev_month}&year={prev_year}">
            ← Mes anterior
        </a>

        <a href="/?month={next_month}&year={next_year}">
            Mes siguiente →
        </a>

    </div>

    <table>

        <tr>

            <th>Lunes</th>
            <th>Martes</th>
            <th>Miércoles</th>
            <th>Jueves</th>
            <th>Viernes</th>
            <th>Sábado</th>
            <th>Domingo</th>

        </tr>
    """

    for semana in cal:

        html += "<tr>"

        for dia in semana:

            if dia == 0:
                html += "<td></td>"
            else:
                html += f"<td>{dia}</td>"

        html += "</tr>"

    html += """

    </table>

    </body>

    </html>

    """

    return html


if __name__ == "__main__":
    app.run(debug=True)