<script>
        $(document).ready(function () {
            $("#login_form").validate({
                rules: {
                    email: {
                        required: true
                    },
                    password: {
                        required: true
                    }
                },
                messages: {
                    email: {
                        required: "enter email"
                    },
                    password: {
                        required: "enter password"
                    }
                }
                })
        };
        )
    </script>