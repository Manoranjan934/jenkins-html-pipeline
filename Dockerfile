# Dockerfile - Portfolio Website
FROM nginx:alpine

LABEL maintainer="manoranjan.tech786@gmail.com"
LABEL app="manoranjan-portfolio"
LABEL version="1.0.0"

# Remove default nginx page
RUN rm -rf /usr/share/nginx/html/*

# Copy website files
COPY index.html /usr/share/nginx/html/
COPY assets/ /usr/share/nginx/html/assets/

# Expose port 80
EXPOSE 80

# Start nginx
CMD ["nginx", "-g", "daemon off;"]