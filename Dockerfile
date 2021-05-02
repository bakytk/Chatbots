
FROM python:3.7-alpine

RUN mkdir /app
WORKDIR /app

ENV FLASK_APP=app.py
ENV FLASK_RUN_HOST=0.0.0.0

ADD requirements.txt /app
ADD server.py /app

RUN python3 -m pip install -r requirements.txt
COPY . .

#CMD ["flask", "run"]

CMD ["gunicorn", "-w 4", "-b", "0.0.0.0:8000", "server:app"]

