ARG RUBY_VERSION=2.6.5
FROM ruby:${RUBY_VERSION}-alpine

ENV RAILS_ENV=production
ENV NODE_ENV=production
ENV LANG C.UTF-8

WORKDIR /tmp

RUN echo @edge http://dl-cdn.alpinelinux.org/alpine/edge/community >> /etc/apk/repositories && \
  echo @edge http://dl-cdn.alpinelinux.org/alpine/edge/main >> /etc/apk/repositories && \
  apk add --no-cache \
  libstdc++@edge \
  libuv@edge \
  nodejs@edge \
  nodejs-npm@edge \
  yarn@edge \
  gmp-dev@edge \
  g++@edge \
  make@edge \
  postgresql-dev@edge \
  tzdata@edge

COPY package.json yarn.lock /tmp/
RUN yarn install

RUN gem install bundler
COPY ./Gemfile ./Gemfile.lock /tmp/
RUN bundle install --without development test

COPY . /app
WORKDIR /app
RUN cp -a /tmp/node_modules /app

RUN RAILS_ENV=production SECRET_KEY_BASE=dummy_value bundle exec rake assets:precompile
RUN rm -rf node_modules

ENTRYPOINT ["bundle", "exec"]
CMD rails server -p $PORT
