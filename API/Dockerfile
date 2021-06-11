
FROM ubuntu:20.04

RUN apt-get update
RUN apt-get upgrade -y
RUN apt-get install -y python3-pip
CMD tail -f /dev/null

#RUN apt-get install -y python3-pip
#RUN pip install --upgrade pip
#RUN pip install scikit-learn flask-restful redis flask

#COPY . /model

#EXPOSE 8100

#ENV ml_debug_level=1
#ENV environment PRODUCTION

#CMD ["python", "/model/server.py"]

# ADD requirements.txt /app
# RUN python3 -m pip install -r requirements.txt
# CMD ["flask", "run"]
# CMD ["gunicorn", "-w 4", "-b", "0.0.0.0:8000", "server:app"]

# docker images
# docker build -t nlp_app .

