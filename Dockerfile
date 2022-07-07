FROM ubuntu:22.04

WORKDIR /bun

RUN apt-get update
RUN apt-get install curl unzip -y
RUN curl --fail --location --progress-bar --output "/bun/bun.zip" "https://github.com/Jarred-Sumner/bun/releases/download/bun-v0.1.1/bun-linux-x64.zip"
RUN unzip -d /bun -q -o "/bun/bun.zip"
RUN mv /bun/bun-linux-x64/bun /usr/local/bin/bun
RUN chmod 777 /usr/local/bin/bun

# Install all node_modules, including dev dependencies

WORKDIR /myapp

RUN addgroup --gid 101 --system appuser && adduser --uid 101 --system appuser
RUN chown -R 101:101 /myapp && chmod -R g+w /myapp
USER appuser

ADD package.json bun.lockb ./
RUN bun install

ADD . .

CMD bun run react-ssr.jsx