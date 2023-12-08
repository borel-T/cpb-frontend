# Use official React image as base
FROM react:latest

# Set working directory
WORKDIR /app

# Copy the build output from the backend container
COPY --from=backend /app/build ./build



# Expose port
ENV PORT=${PORT:-3000}
EXPOSE $PORT


# Serve the built React app
CMD ["npm", "start"]
