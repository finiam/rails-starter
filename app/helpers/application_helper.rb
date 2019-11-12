module ApplicationHelper
  # Shorthand helper for react components
  # Only use prerender in test and prod environments, even if it's set to true
  def render_react_component(component:, props: nil, prerender: false)
    react_component(component, props, prerender: true, camelize_props: true)
  end
end
