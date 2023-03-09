FROM registry.mec.gov.br/library/nginx:1.20-alpine

COPY --chown=nginx:nginx ./build ./
