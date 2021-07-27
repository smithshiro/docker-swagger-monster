FROM node:15

RUN npm i -g gulp swagger-merger

COPY ./startup.sh /opt/startup.sh 

RUN chmod +x /opt/startup.sh

CMD ["/bin/bash", "/opt/startup.sh"]
