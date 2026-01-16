# Sixnity Client - Docker Deployment Guide

## 📋 Prerequisites

- Docker and Docker Compose installed
- Domain DNS configured (sixnity.com pointing to your server IP)
- GitHub repository secrets configured

## 🚀 Quick Start

### Local Development with Docker

```bash
# Build and run containers
docker-compose up -d

# View logs
docker-compose logs -f

# Stop containers
docker-compose down
```

The application will be available at:
- Application: http://localhost:3005
- Nginx: http://localhost:80

## 🔒 SSL Certificate Setup

### Option 1: Using Let's Encrypt (Recommended)

1. Install Certbot on your server:
```bash
sudo apt-get update
sudo apt-get install certbot
```

2. Obtain SSL certificate:
```bash
sudo certbot certonly --standalone -d sixnity.com -d www.sixnity.com
```

3. Copy certificates to the ssl directory:
```bash
mkdir -p ssl
sudo cp /etc/letsencrypt/live/sixnity.com/fullchain.pem ssl/
sudo cp /etc/letsencrypt/live/sixnity.com/privkey.pem ssl/
```

4. Set up auto-renewal:
```bash
sudo certbot renew --dry-run
```

### Option 2: Using Docker Certbot

Update docker-compose.yml to include certbot service (see commented section).

## 🔐 GitHub Actions Secrets

Configure these secrets in your GitHub repository (Settings → Secrets and variables → Actions):

- `DOCKER_USERNAME`: Your Docker Hub username
- `DOCKER_PASSWORD`: Your Docker Hub password or access token
- `SERVER_HOST`: Your production server IP or hostname
- `SERVER_USERNAME`: SSH username for deployment
- `SSH_PRIVATE_KEY`: SSH private key for authentication
- `SERVER_PORT`: SSH port (default: 22)

## 🛠️ Server Setup

1. **Install Docker on your server:**
```bash
curl -fsSL https://get.docker.com -o get-docker.sh
sudo sh get-docker.sh
sudo usermod -aG docker $USER
```

2. **Create deployment directory:**
```bash
sudo mkdir -p /var/www/sixnity-client
sudo chown $USER:$USER /var/www/sixnity-client
cd /var/www/sixnity-client
```

3. **Copy docker-compose.yml and nginx.conf:**
```bash
# Upload docker-compose.yml and nginx.conf to /var/www/sixnity-client
```

4. **Create SSL directory:**
```bash
mkdir -p ssl
```

## 📦 Manual Deployment

```bash
# Build the image
docker build -t sixnity-client .

# Run with docker-compose
docker-compose up -d

# Check status
docker ps
docker-compose logs -f
```

## 🔍 Monitoring

### Check container status
```bash
docker-compose ps
```

### View application logs
```bash
docker-compose logs -f nextjs-app
```

### View nginx logs
```bash
docker-compose logs -f nginx
```

### Check container health
```bash
docker inspect sixnity-client | grep -A 10 Health
```

## 🔄 Updates and Rollback

### Update to latest version
```bash
docker-compose pull
docker-compose up -d
```

### Rollback to previous version
```bash
docker-compose down
docker pull yourdockerhub/sixnity-client:previous-sha
docker-compose up -d
```

## 🧹 Maintenance

### Clean up unused Docker resources
```bash
docker system prune -af --volumes
```

### Restart services
```bash
docker-compose restart
```

### Rebuild without cache
```bash
docker-compose build --no-cache
docker-compose up -d
```

## 📊 Performance Optimization

The Nginx configuration includes:
- Gzip compression
- Static file caching
- HTTP/2 support
- Rate limiting
- Security headers

## 🐛 Troubleshooting

### Application not starting
```bash
docker-compose logs nextjs-app
```

### Port already in use
```bash
sudo lsof -i :3005
sudo lsof -i :80
```

### SSL certificate issues
```bash
sudo certbot certificates
```

### Nginx configuration test
```bash
docker-compose exec nginx nginx -t
```

## 🔗 Useful Commands

```bash
# Enter container shell
docker-compose exec nextjs-app sh

# Check nginx config
docker-compose exec nginx nginx -t

# Reload nginx
docker-compose exec nginx nginx -s reload

# View container stats
docker stats

# Remove all containers and volumes
docker-compose down -v
```

## 📝 Environment Variables

Create a `.env` file in the project root for environment-specific variables:

```env
NODE_ENV=production
PORT=3005
# Add your environment variables here
```

## 🌐 DNS Configuration

Point your domain to your server:
- A record: `sixnity.com` → `Your Server IP`
- A record: `www.sixnity.com` → `Your Server IP`

## 📞 Support

For issues or questions, please check the logs first:
```bash
docker-compose logs -f
```
