FROM nginx

COPY dist/hachathon /usr/share/nginx/html
COPY dist/hachathon/static/index.html /usr/share/nginx/html/index.html
COPY etc/site.conf /etc/nginx/conf.d/default.conf
