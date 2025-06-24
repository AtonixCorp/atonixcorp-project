export const main = (request, context) => {
  console.log(`Handling Dynamic Pipelines request: ${JSON.stringify(request, null, 4)}`);
  return { pipelines_configuration: request.pipelines_configuration };
};
