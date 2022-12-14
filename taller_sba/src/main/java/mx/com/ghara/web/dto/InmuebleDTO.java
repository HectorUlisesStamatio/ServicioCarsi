package mx.com.ghara.web.dto;

import lombok.Data;
import mx.com.ghara.model.Categoria;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.PositiveOrZero;

@Data
public class InmuebleDTO {
    @NotBlank
    private String titulo;

    @NotBlank
    private String slug;

    @NotBlank
    private String descripcion;

    @NotBlank
    private String rutaPortada;

    @NotBlank
    private String direccion;


    private int status;

    @NotNull
    @PositiveOrZero
    private int usuario;

    private Categoria categoria;

}
