module Admin
  class UsersController < Admin::ApplicationController
    def update
      if requested_resource.update(filtered_resource_params)
        redirect_to(
          [namespace, requested_resource],
          notice: translate_with_resource("update.success"),
        )
      else
        render :edit, locals: {
          page: Administrate::Page::Form.new(dashboard, requested_resource)
        }
      end
    end

    private

    def filtered_resource_params
      custom_resource_params = resource_params

      custom_resource_params.delete("password") if custom_resource_params["password"] == ""

      custom_resource_params
    end
  end
end
